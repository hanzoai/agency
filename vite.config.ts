import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    // @hanzo/gui renders through react-native-web on the web, and every RNW app
    // carries these two: react-native-svg's web build imports bare `react-native`,
    // and its entry only reaches that build when `.web.js` outranks `.js`.
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-native": "react-native-web",
      "@react-native/assets-registry/registry": "react-native-web/dist/modules/AssetRegistry",
    },
    extensions: ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
  },
}));
