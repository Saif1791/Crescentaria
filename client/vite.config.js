import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    proxy: {
      "/server": {
        target: "http://localhost:3000",
        secure: false,
      },
      "/api": {
        target: "https://crescentaria-api.vercel.app",
        secure: true,
      },
    },
  },

  plugins: [react()],
});
