package main

import (
	"encoding/json"
	"io"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

// fakeCommerce stands in for commerce.hanzo.svc so we can assert exactly what
// the BFF sends upstream — the security-critical part is that it authenticates
// with the storefront token and never leaks a client-chosen org/price/redirect.
func fakeCommerce(t *testing.T, wantToken string, capture *commerceSessionRequest) *httptest.Server {
	t.Helper()
	return httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if got := r.Header.Get("Authorization"); got != "Bearer "+wantToken {
			t.Errorf("upstream Authorization = %q, want Bearer %q", got, wantToken)
			w.WriteHeader(401)
			return
		}
		// The BFF always pins its own org — the tenant is never client-chosen.
		if got := r.Header.Get("X-Org-Id"); got != "hanzo" {
			t.Errorf("upstream X-Org-Id = %q, want hanzo", got)
			w.WriteHeader(400)
			return
		}
		switch r.URL.Path {
		case "/v1/checkout/sessions":
			body, _ := io.ReadAll(r.Body)
			if capture != nil {
				_ = json.Unmarshal(body, capture)
			}
			writeJSON(w, 200, map[string]any{
				"checkoutUrl": "https://squareupsandbox.com/pay/abc123",
				"sessionId":   "sess_test",
			})
		case "/v1/checkout/wire/instructions":
			writeJSON(w, 200, map[string]any{"bank": "Test Bank", "account": "000"})
		default:
			w.WriteHeader(404)
		}
	}))
}

func newTestBFF(commerceURL, token string) *bff {
	return newBFF(config{
		commerceURL:   commerceURL,
		org:           "hanzo",
		publicBaseURL: "https://hanzo.agency",
		commerceToken: token,
	})
}

func TestCheckout_CardMintsViaStorefrontToken(t *testing.T) {
	var sent commerceSessionRequest
	up := fakeCommerce(t, "storefront-tok", &sent)
	defer up.Close()
	b := newTestBFF(up.URL, "storefront-tok")

	rr := post(t, b, `{"plan":"agency","email":"a@b.com","name":"Ada","paymentMethod":"card"}`)
	if rr.Code != 200 {
		t.Fatalf("status = %d, body=%s", rr.Code, rr.Body.String())
	}
	var out map[string]any
	_ = json.Unmarshal(rr.Body.Bytes(), &out)
	if out["type"] != "redirect" || out["url"] == "" {
		t.Fatalf("unexpected response: %v", out)
	}

	// Server-authoritative invariants: the BFF sends a catalog REFERENCE (slug),
	// never a price — commerce resolves the amount from its own listing. Redirect
	// to the org's own site, provider square, currency USD. No client override.
	if len(sent.Items) != 1 || sent.Items[0].ProductSlug != "agency" || sent.Items[0].Quantity != 1 {
		t.Fatalf("item not a server-authoritative catalog reference: %+v", sent.Items)
	}
	if sent.SuccessURL != "https://hanzo.agency/onboarding-success" {
		t.Fatalf("successUrl not server-built: %q", sent.SuccessURL)
	}
	if sent.CancelURL != "https://hanzo.agency/pricing" {
		t.Fatalf("cancelUrl not server-built: %q", sent.CancelURL)
	}
	if sent.ProviderHint != "square" || sent.Currency != "USD" {
		t.Fatalf("provider/currency wrong: %+v", sent)
	}
}

func TestCheckout_ClientCannotOverridePriceOrRedirect(t *testing.T) {
	var sent commerceSessionRequest
	up := fakeCommerce(t, "tok", &sent)
	defer up.Close()
	b := newTestBFF(up.URL, "tok")

	// Client tries to smuggle amount/org/successUrl — all must be ignored. The
	// BFF forwards only a catalog reference (slug); there is no amount field for
	// the client to influence, and the redirect is server-built.
	rr := post(t, b, `{"plan":"instant-site","email":"a@b.com","name":"A",
		"amount":1,"org":"victim","successUrl":"https://evil.com"}`)
	if rr.Code != 200 {
		t.Fatalf("status = %d, body=%s", rr.Code, rr.Body.String())
	}
	if sent.Items[0].ProductSlug != "instant-site" {
		t.Fatalf("client overrode catalog reference: %+v", sent.Items)
	}
	if strings.Contains(sent.SuccessURL, "evil.com") {
		t.Fatalf("client overrode redirect: %q", sent.SuccessURL)
	}
}

func TestClientIP_TrustsOnlyIngressSetHops(t *testing.T) {
	mk := func(realIP, xff, remote string) *http.Request {
		r := httptest.NewRequest(http.MethodPost, "/v1/checkout", nil)
		r.RemoteAddr = remote
		if realIP != "" {
			r.Header.Set("X-Real-IP", realIP)
		}
		if xff != "" {
			r.Header.Set("X-Forwarded-For", xff)
		}
		return r
	}
	// X-Real-IP (set by hanzoai/ingress) is authoritative when present.
	if got := clientIP(mk("203.0.113.7", "1.1.1.1, 203.0.113.7", "10.0.0.1:5")); got != "203.0.113.7" {
		t.Fatalf("X-Real-IP not trusted: got %q", got)
	}
	// Without X-Real-IP, take the RIGHTMOST XFF hop (appended by our proxy),
	// never the client-spoofable leftmost.
	if got := clientIP(mk("", "1.1.1.1, 203.0.113.7", "10.0.0.1:5")); got != "203.0.113.7" {
		t.Fatalf("did not take rightmost XFF hop: got %q", got)
	}
	// A forged leftmost XFF must NOT become the rate-limit key.
	if got := clientIP(mk("", "evil-spoof, 203.0.113.7", "10.0.0.1:5")); got == "evil-spoof" {
		t.Fatalf("leftmost spoof leaked into rate-limit key: %q", got)
	}
	// Single-entry XFF is honored.
	if got := clientIP(mk("", "203.0.113.9", "10.0.0.1:5")); got != "203.0.113.9" {
		t.Fatalf("single XFF entry not used: got %q", got)
	}
	// No proxy headers → RemoteAddr host.
	if got := clientIP(mk("", "", "198.51.100.4:4444")); got != "198.51.100.4" {
		t.Fatalf("RemoteAddr fallback wrong: got %q", got)
	}
}

func TestCheckout_FailsClosedWithoutStorefrontToken(t *testing.T) {
	b := newTestBFF("http://unused", "") // no token
	rr := post(t, b, `{"plan":"agency","email":"a@b.com","name":"A","paymentMethod":"card"}`)
	if rr.Code != http.StatusServiceUnavailable {
		t.Fatalf("status = %d, want 503 (fail closed)", rr.Code)
	}
}

func TestCheckout_UnknownPlanRejected(t *testing.T) {
	up := fakeCommerce(t, "tok", nil)
	defer up.Close()
	b := newTestBFF(up.URL, "tok")
	rr := post(t, b, `{"plan":"free-lunch","email":"a@b.com","name":"A"}`)
	if rr.Code != http.StatusBadRequest {
		t.Fatalf("status = %d, want 400", rr.Code)
	}
}

func TestCheckout_RejectsNonPost(t *testing.T) {
	b := newTestBFF("http://unused", "tok")
	req := httptest.NewRequest(http.MethodGet, "/v1/checkout", nil)
	rr := httptest.NewRecorder()
	b.handleCheckout(rr, req)
	if rr.Code != http.StatusMethodNotAllowed {
		t.Fatalf("status = %d, want 405", rr.Code)
	}
}

func TestCheckout_Wire(t *testing.T) {
	up := fakeCommerce(t, "tok", nil)
	defer up.Close()
	b := newTestBFF(up.URL, "tok")
	rr := post(t, b, `{"plan":"agency","email":"a@b.com","name":"A","paymentMethod":"wire"}`)
	if rr.Code != 200 {
		t.Fatalf("status = %d, body=%s", rr.Code, rr.Body.String())
	}
	var out map[string]any
	_ = json.Unmarshal(rr.Body.Bytes(), &out)
	if out["type"] != "wire" || out["instructions"] == nil {
		t.Fatalf("unexpected wire response: %v", out)
	}
}

func post(t *testing.T, b *bff, body string) *httptest.ResponseRecorder {
	t.Helper()
	req := httptest.NewRequest(http.MethodPost, "/v1/checkout", strings.NewReader(body))
	req.Header.Set("Content-Type", "application/json")
	rr := httptest.NewRecorder()
	b.handleCheckout(rr, req)
	return rr
}
