import { defineConfig } from "vite";
import { Buffer } from 'buffer';
import reactRefresh from "@vitejs/plugin-react-refresh";
globalThis.Buffer = Buffer;

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
  },
  define: {
    "Buffer": Buffer
  },
});
