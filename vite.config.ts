import * as path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()], // svgrPlugin => svg 파일 사용
  server: {
    port: 3000, // locahost:3000 사용
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // path의 절대 경로 사용을 위해
    },
  },
});
