// Command agency serves the Hanzo Agency SPA and its server-side checkout BFF.
//
// The SPA is a static Vite bundle (embedded). The BFF is the ONE server-side
// entry that mints a hosted-checkout (Square Payment Link) for the agency's
// onboarding flow. The browser never talks to commerce directly and never holds
// a token: it POSTs {plan,email,name,paymentMethod} to same-origin /v1/checkout,
// and this server calls commerce with a per-org Published storefront token it
// holds from KMS. Org, item prices, and the success/cancel redirect are all
// server-authoritative — the client can only ever mint for hanzo's own products
// redirecting to hanzo's own site.
package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"
)

// version is injected at build time via -ldflags "-X main.version=<tag>".
var version = "dev"

func main() {
	cfg := loadConfig()
	bff := newBFF(cfg)
	log.Printf("agency: version %s", version)

	mux := http.NewServeMux()
	mux.HandleFunc("/health", func(w http.ResponseWriter, _ *http.Request) {
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write([]byte("ok"))
	})
	// The one server-side checkout entry. Method-guarded inside the handler.
	mux.Handle("/v1/checkout", bff.rateLimit(http.HandlerFunc(bff.handleCheckout)))
	// SPA fallback for everything else.
	mux.Handle("/", spaHandler())

	srv := &http.Server{
		Addr:              cfg.addr,
		Handler:           securityHeaders(mux),
		ReadHeaderTimeout: 10 * time.Second,
		ReadTimeout:       30 * time.Second,
		WriteTimeout:      30 * time.Second,
		IdleTimeout:       120 * time.Second,
	}

	go func() {
		log.Printf("agency: listening on %s (commerce=%s org=%s base=%s commerce-token=%v)",
			cfg.addr, cfg.commerceURL, cfg.org, cfg.publicBaseURL, cfg.commerceToken != "")
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			log.Fatalf("agency: server error: %v", err)
		}
	}()

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)
	<-stop
	log.Printf("agency: shutting down")
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	_ = srv.Shutdown(ctx)
}

// securityHeaders applies defense-in-depth browser hardening to every response.
// The onboarding flow embeds no third-party frames of its own, so deny framing
// (clickjacking the checkout CTA) and lock MIME sniffing.
func securityHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("X-Frame-Options", "DENY")
		w.Header().Set("X-Content-Type-Options", "nosniff")
		w.Header().Set("Referrer-Policy", "strict-origin-when-cross-origin")
		next.ServeHTTP(w, r)
	})
}

// config holds the deployment-varying knobs; secrets come from env sourced from
// a KMS-synced K8s secret, never baked into the image.
type config struct {
	addr          string
	commerceURL   string // in-cluster commerce API base, e.g. http://commerce.hanzo.svc:8001
	org           string // IAM org slug (== tenant); default hanzo
	publicBaseURL string // server-authoritative redirect base, e.g. https://hanzo.agency
	// commerceToken is the bearer the BFF authenticates to commerce with. It is
	// EITHER a per-org Published storefront token (least-privilege, preferred —
	// org derived from the token) OR the platform service token (org selected by
	// the X-Org-Id header the BFF always stamps with cfg.org). One code path
	// serves both; the browser never sees it.
	commerceToken string
}

func loadConfig() config {
	// COMMERCE_TOKEN is canonical; COMMERCE_STOREFRONT_TOKEN is accepted as an
	// alias so a dedicated storefront-token secret can be dropped in later with
	// no manifest churn.
	token := strings.TrimSpace(os.Getenv("COMMERCE_TOKEN"))
	if token == "" {
		token = strings.TrimSpace(os.Getenv("COMMERCE_STOREFRONT_TOKEN"))
	}
	return config{
		addr:          ":" + envOr("PORT", "3000"),
		commerceURL:   strings.TrimRight(envOr("COMMERCE_URL", "http://commerce.hanzo.svc:8001"), "/"),
		org:           envOr("COMMERCE_ORG", "hanzo"),
		publicBaseURL: strings.TrimRight(envOr("PUBLIC_BASE_URL", "https://hanzo.agency"), "/"),
		commerceToken: token,
	}
}

func envOr(key, def string) string {
	if v := strings.TrimSpace(os.Getenv(key)); v != "" {
		return v
	}
	return def
}
