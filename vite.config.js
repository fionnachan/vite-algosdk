import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import nodePolyfills from 'rollup-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    nodePolyfills()
  ],
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  }
});
