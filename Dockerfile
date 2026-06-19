# syntax=docker/dockerfile:1
# Multi-stage build for the Hanzo Agency site (Vite + React SPA).
# Stage 1 builds the static bundle with pnpm; stage 2 serves it from a
# minimal Node runtime via `serve` (SPA history-API fallback). No nginx/caddy.

# ---- deps + build ----
FROM node:22-slim AS build
ENV PNPM_HOME=/pnpm
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# Install deps first (cached unless lockfile/manifest change)
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Build the static site -> /app/dist
COPY . .
RUN pnpm build

# ---- runtime (self-contained static file server) ----
FROM node:22-slim AS runtime
ENV NODE_ENV=production
WORKDIR /app
# `serve` is a tiny Node static server, baked in at build time so the
# runtime image is self-contained (no network fetch on cold start).
RUN npm install -g serve@14 && npm cache clean --force
COPY --from=build /app/dist ./dist
EXPOSE 3000
# --single = SPA history-API fallback (client-side routing).
CMD ["serve", "-s", "dist", "-l", "3000"]
