import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/journy-junkies/", // adjust this to your repository name
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": {
        target: "http://journyjunkies.ddns.net:8081",
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
