import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { readFileSync } from "fs";

// The GA4 stream is stated once, in hanzo.yml; index.html names it as %GA%.
const GA = /googleAnalyticsId:\s*(G-[A-Z0-9]+)/.exec(
  readFileSync(path.resolve(__dirname, "hanzo.yml"), "utf8"),
)?.[1];
if (!GA) throw new Error("hanzo.yml states no analytics.googleAnalyticsId");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    { name: "ga", transformIndexHtml: (html: string) => html.replaceAll("%GA%", GA) },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
