# syntax=docker/dockerfile:1
# Hanzo Agency (Vite + React SPA) — served via the canonical hanzoai/spa
# static server (one way for static SPAs). No node runtime in the final stage.
FROM node:22-slim AS build
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build
FROM ghcr.io/hanzoai/spa
COPY --from=build /app/dist /public
