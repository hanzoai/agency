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

	// Server-authoritative invariants: price from the server map, redirect to
	// the org's own site, provider square, currency USD. No client override.
	if len(sent.Items) != 1 || sent.Items[0].Amount != 999900 {
		t.Fatalf("item amount not server-authoritative: %+v", sent.Items)
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

	// Client tries to smuggle amount/org/successUrl — all must be ignored.
	rr := post(t, b, `{"plan":"instant-site","email":"a@b.com","name":"A",
		"amount":1,"org":"victim","successUrl":"https://evil.com"}`)
	if rr.Code != 200 {
		t.Fatalf("status = %d, body=%s", rr.Code, rr.Body.String())
	}
	if sent.Items[0].Amount != 50000 {
		t.Fatalf("client overrode price: %+v", sent.Items)
	}
	if strings.Contains(sent.SuccessURL, "evil.com") {
		t.Fatalf("client overrode redirect: %q", sent.SuccessURL)
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
