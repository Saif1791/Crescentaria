import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  build: {
    target: "esnext", //browsers can handle the latest ES features
  },
  server: {
    proxy: {
      "/server": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },

  plugins: [react()],
});
