package main

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"log"
	"net"
	"net/http"
	"strings"
	"sync"
	"time"
)

// plan is a server-authoritative product the agency onboarding flow can buy.
// Prices live HERE, not in the browser: the client only names a plan, so a
// tampered client can never change the amount charged. `name`/`amount` mirror
// the agency pricing page (amount is in the currency's minor unit — cents).
type plan struct {
	name   string
	amount int64
}

// plans is the ONE place agency checkout prices are defined.
var plans = map[string]plan{
	"agency":       {name: "Agency Service", amount: 999900},
	"instant-site": {name: "Instant Site", amount: 50000},
	"enterprise":   {name: "Enterprise", amount: 999900},
}

type bff struct {
	cfg    config
	client *http.Client
	lim    *ipLimiter
}

func newBFF(cfg config) *bff {
	return &bff{
		cfg:    cfg,
		client: &http.Client{Timeout: 20 * time.Second},
		lim:    newIPLimiter(10, time.Minute), // 10 mint attempts / IP / minute
	}
}

// checkoutRequest is the browser → BFF contract. There is deliberately NO org,
// no amount, and no successUrl field — those are all server-authoritative.
type checkoutRequest struct {
	Plan          string `json:"plan"`
	Email         string `json:"email"`
	Name          string `json:"name"`
	PaymentMethod string `json:"paymentMethod"` // card | crypto | wire
	CouponCode    string `json:"couponCode,omitempty"`
}

// commerceSessionRequest is the BFF → commerce POST /v1/checkout/sessions body.
// Org is derived by commerce from the storefront token (never sent here);
// successUrl/cancelUrl are server-built from PUBLIC_BASE_URL.
type commerceSessionRequest struct {
	ProviderHint string          `json:"providerHint"`
	Currency     string          `json:"currency"`
	Customer     commerceCust    `json:"customer"`
	Items        []commerceItem  `json:"items"`
	SuccessURL   string          `json:"successUrl"`
	CancelURL    string          `json:"cancelUrl"`
	CouponCode   string          `json:"couponCode,omitempty"`
}

type commerceCust struct {
	Email string `json:"email"`
	Name  string `json:"name"`
}

type commerceItem struct {
	Name     string `json:"name"`
	Amount   int64  `json:"amount"`
	Quantity int    `json:"quantity"`
}

// handleCheckout is the server-side BFF. It authenticates to commerce with the
// per-org Published storefront token so the browser never holds a credential
// and can never choose the org, price, or redirect target.
func (b *bff) handleCheckout(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		writeErr(w, http.StatusMethodNotAllowed, "method not allowed")
		return
	}

	var req checkoutRequest
	if err := json.NewDecoder(io.LimitReader(r.Body, 1<<16)).Decode(&req); err != nil {
		writeErr(w, http.StatusBadRequest, "invalid request body")
		return
	}
	if req.Email == "" || req.Name == "" {
		writeErr(w, http.StatusBadRequest, "email and name are required")
		return
	}

	method := req.PaymentMethod
	if method == "" {
		method = "card"
	}

	if b.cfg.storefrontToken == "" {
		// Fail closed: without the storefront token we cannot authenticate to
		// commerce, and we must NEVER fall back to an anonymous mint.
		log.Printf("agency: checkout refused — COMMERCE_STOREFRONT_TOKEN not configured")
		writeErr(w, http.StatusServiceUnavailable, "checkout temporarily unavailable")
		return
	}

	if method == "wire" {
		b.handleWire(w, r)
		return
	}

	p, ok := plans[req.Plan]
	if !ok {
		writeErr(w, http.StatusBadRequest, "unknown plan")
		return
	}

	providerHint := "square"
	if method == "crypto" {
		providerHint = "ethereum"
	}

	body := commerceSessionRequest{
		ProviderHint: providerHint,
		Currency:     "USD",
		Customer:     commerceCust{Email: req.Email, Name: req.Name},
		Items:        []commerceItem{{Name: p.name, Amount: p.amount, Quantity: 1}},
		SuccessURL:   b.cfg.publicBaseURL + "/onboarding-success",
		CancelURL:    b.cfg.publicBaseURL + "/pricing",
		CouponCode:   req.CouponCode,
	}

	status, respBody, err := b.postCommerce(r.Context(), "/v1/checkout/sessions", body)
	if err != nil {
		log.Printf("agency: commerce sessions call failed: %v", err)
		writeErr(w, http.StatusBadGateway, "checkout upstream error")
		return
	}
	if status < 200 || status >= 300 {
		log.Printf("agency: commerce sessions returned %d: %s", status, truncate(respBody, 512))
		writeErr(w, http.StatusBadGateway, "checkout could not be started")
		return
	}

	var sess struct {
		CheckoutURL string `json:"checkoutUrl"`
		SessionID   string `json:"sessionId"`
	}
	if err := json.Unmarshal(respBody, &sess); err != nil || sess.CheckoutURL == "" {
		log.Printf("agency: unexpected commerce sessions response: %s", truncate(respBody, 512))
		writeErr(w, http.StatusBadGateway, "checkout upstream error")
		return
	}

	writeJSON(w, http.StatusOK, map[string]any{
		"type":      "redirect",
		"url":       sess.CheckoutURL,
		"sessionId": sess.SessionID,
	})
}

// handleWire returns the org's bank-wire instructions. Post-P0 this commerce
// endpoint is authed and fails closed without an org, so the BFF calls it with
// the storefront token (which carries the org identity) — never anonymously.
func (b *bff) handleWire(w http.ResponseWriter, r *http.Request) {
	status, respBody, err := b.getCommerce(r.Context(), "/v1/checkout/wire/instructions")
	if err != nil {
		log.Printf("agency: commerce wire call failed: %v", err)
		writeErr(w, http.StatusBadGateway, "wire instructions unavailable")
		return
	}
	if status < 200 || status >= 300 {
		log.Printf("agency: commerce wire returned %d: %s", status, truncate(respBody, 512))
		writeErr(w, http.StatusBadGateway, "wire instructions unavailable")
		return
	}
	var instructions map[string]any
	if err := json.Unmarshal(respBody, &instructions); err != nil {
		log.Printf("agency: unexpected commerce wire response: %s", truncate(respBody, 512))
		writeErr(w, http.StatusBadGateway, "wire instructions unavailable")
		return
	}
	writeJSON(w, http.StatusOK, map[string]any{
		"type":         "wire",
		"instructions": instructions,
	})
}

func (b *bff) postCommerce(ctx context.Context, path string, body any) (int, []byte, error) {
	buf, err := json.Marshal(body)
	if err != nil {
		return 0, nil, err
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, b.cfg.commerceURL+path, bytes.NewReader(buf))
	if err != nil {
		return 0, nil, err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+b.cfg.storefrontToken)
	return b.do(req)
}

func (b *bff) getCommerce(ctx context.Context, path string) (int, []byte, error) {
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, b.cfg.commerceURL+path, nil)
	if err != nil {
		return 0, nil, err
	}
	req.Header.Set("Authorization", "Bearer "+b.cfg.storefrontToken)
	return b.do(req)
}

func (b *bff) do(req *http.Request) (int, []byte, error) {
	resp, err := b.client.Do(req)
	if err != nil {
		return 0, nil, err
	}
	defer resp.Body.Close()
	data, err := io.ReadAll(io.LimitReader(resp.Body, 1<<20))
	if err != nil {
		return resp.StatusCode, nil, err
	}
	return resp.StatusCode, data, nil
}

// rateLimit is a coarse per-IP guard on the mint endpoint: it is anonymous by
// design (public site), so bound abuse of the money path.
func (b *bff) rateLimit(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !b.lim.allow(clientIP(r)) {
			writeErr(w, http.StatusTooManyRequests, "too many requests")
			return
		}
		next.ServeHTTP(w, r)
	})
}

// ipLimiter is a tiny fixed-window per-IP counter (stdlib only).
type ipLimiter struct {
	mu     sync.Mutex
	hits   map[string]int
	window time.Duration
	max    int
	reset  time.Time
}

func newIPLimiter(max int, window time.Duration) *ipLimiter {
	return &ipLimiter{hits: map[string]int{}, window: window, max: max, reset: time.Now().Add(window)}
}

func (l *ipLimiter) allow(ip string) bool {
	l.mu.Lock()
	defer l.mu.Unlock()
	if time.Now().After(l.reset) {
		l.hits = map[string]int{}
		l.reset = time.Now().Add(l.window)
	}
	l.hits[ip]++
	return l.hits[ip] <= l.max
}

func clientIP(r *http.Request) string {
	// Behind hanzoai/ingress the real client is in X-Forwarded-For (first hop).
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		if i := strings.IndexByte(xff, ','); i >= 0 {
			return strings.TrimSpace(xff[:i])
		}
		return strings.TrimSpace(xff)
	}
	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return host
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

func writeErr(w http.ResponseWriter, status int, msg string) {
	writeJSON(w, status, map[string]string{"error": msg})
}

func truncate(b []byte, n int) string {
	if len(b) <= n {
		return string(b)
	}
	return string(b[:n]) + "…"
}
