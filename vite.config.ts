import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

/**
 * The consent banner is @hanzo/ui, which draws through @hanzo/gui, a
 * react-native-web renderer on the browser. Two resolver facts follow:
 * `react-native` means `react-native-web` here (the native package ships Flow
 * and stops the bundler at its first `import typeof`), and `.web.js` wins over
 * `.js`, which is how react-native-svg offers its browser implementation.
 */
const web = [".web.tsx", ".web.ts", ".web.jsx", ".web.js"];

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react-native": "react-native-web",
      "@react-native/assets-registry/registry": "react-native-web/dist/modules/AssetRegistry",
    },
    extensions: [...web, ".mjs", ".js", ".mts", ".ts", ".jsx", ".tsx", ".json"],
  },
}));
