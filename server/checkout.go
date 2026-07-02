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

// offeredPlans is the set of catalog slugs the agency onboarding flow sells.
// It carries NO prices — pricing is SOLELY the commerce per-org catalog
// (a store Listing keyed by this slug). The BFF only names a plan; commerce
// resolves the authoritative price from its stored listing server-side, so a
// tampered client can never change the amount charged AND the price can never
// drift between two places. This is membership, not pricing: it lets the BFF
// reject an unknown plan with a clean 400 without a commerce round-trip and
// without duplicating (or ever contradicting) the catalog.
var offeredPlans = map[string]struct{}{
	"agency":       {},
	"instant-site": {},
	"enterprise":   {},
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

// commerceItem is a catalog REFERENCE, never a price. The BFF sends only the
// product slug and quantity; commerce resolves the authoritative unit price
// from the org's own stored listing (Red/CTO: raw amounts were silently
// ignored by commerce, so a $9,999 plan minted at the $50 hat-fallback). There
// is deliberately NO amount/name field here — the per-org catalog is the sole
// server-side price authority.
type commerceItem struct {
	ProductSlug string `json:"productSlug"`
	Quantity    int    `json:"quantity"`
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

	if b.cfg.commerceToken == "" {
		// Fail closed: without a commerce token we cannot authenticate, and we
		// must NEVER fall back to an anonymous mint.
		log.Printf("agency: checkout refused — COMMERCE_TOKEN not configured")
		writeErr(w, http.StatusServiceUnavailable, "checkout temporarily unavailable")
		return
	}

	if method == "wire" {
		b.handleWire(w, r)
		return
	}

	if _, ok := offeredPlans[req.Plan]; !ok {
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
		// Catalog reference only — commerce prices this from the org's stored
		// listing (slug == plan). No amount crosses the wire.
		Items:        []commerceItem{{ProductSlug: req.Plan, Quantity: 1}},
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
	b.authHeaders(req)
	return b.do(req)
}

func (b *bff) getCommerce(ctx context.Context, path string) (int, []byte, error) {
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, b.cfg.commerceURL+path, nil)
	if err != nil {
		return 0, nil, err
	}
	b.authHeaders(req)
	return b.do(req)
}

// authHeaders stamps the commerce identity onto an upstream request. X-Org-Id
// pins the tenant when the token is the platform service token; for a per-org
// storefront token commerce derives the org from the token and the header is a
// harmless no-op — so ONE code path serves both token kinds. The BFF ALWAYS
// pins its own configured org: the browser can never choose the tenant.
func (b *bff) authHeaders(req *http.Request) {
	req.Header.Set("Authorization", "Bearer "+b.cfg.commerceToken)
	req.Header.Set("X-Org-Id", b.cfg.org)
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

// clientIP returns the caller's IP for rate limiting, trusting ONLY hops our
// own ingress set. hanzoai/ingress terminates the client connection and writes
// the real client IP into X-Real-IP, so that is authoritative. The LEFTMOST
// X-Forwarded-For entry is attacker-controlled (a client can prepend any value;
// the proxy only appends), so keying rate limiting on it lets an attacker forge
// unlimited distinct "IPs" and evade the mint limiter — Red LOW. When falling
// back to XFF we therefore take the RIGHTMOST entry: the one appended by our
// single trusted proxy, i.e. the real client as our ingress saw it.
func clientIP(r *http.Request) string {
	if xr := strings.TrimSpace(r.Header.Get("X-Real-IP")); xr != "" {
		return xr
	}
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		if i := strings.LastIndexByte(xff, ','); i >= 0 {
			if last := strings.TrimSpace(xff[i+1:]); last != "" {
				return last
			}
		} else if only := strings.TrimSpace(xff); only != "" {
			return only
		}
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
