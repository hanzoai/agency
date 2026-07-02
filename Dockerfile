# Hanzo Agency — SPA + server-side checkout BFF, one image.
#
# NOTE: agency is no longer a pure static SPA (it was served by ghcr.io/hanzoai/spa).
# The onboarding checkout needs a server-side authed BFF holding a KMS storefront
# token — a static server cannot hold a secret — so agency now ships a small Go
# server that serves the embedded SPA AND the /v1/checkout BFF. Same pattern as
# the commerce checkout binary.
#
# Stage 1 builds the Vite SPA. Stage 2 embeds that bundle into a static Go binary.
# Stage 3 is a minimal runtime.

# ─── Stage 1: build the Vite SPA ──────────────────────────────────────────────
FROM node:22-alpine AS spa
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# ─── Stage 2: build the Go server with the SPA embedded ───────────────────────
FROM golang:1.26-alpine AS server
WORKDIR /src
COPY go.mod ./
COPY server/ ./server/
# Overwrite the committed placeholder with the real Vite output so go:embed
# ships the hashed assets.
RUN rm -rf ./server/static && mkdir -p ./server/static
COPY --from=spa /app/dist/ ./server/static/
ARG VERSION=""
RUN CGO_ENABLED=0 GOOS=linux go build -trimpath \
      -ldflags="-s -w -X main.version=${VERSION}" \
      -o /out/agency ./server

# ─── Stage 3: runtime ─────────────────────────────────────────────────────────
FROM alpine:3.21
RUN apk add --no-cache ca-certificates && adduser -D -u 10001 app
USER app
COPY --from=server /out/agency /usr/local/bin/agency
ENV PORT=3000
EXPOSE 3000
ENTRYPOINT ["/usr/local/bin/agency"]
