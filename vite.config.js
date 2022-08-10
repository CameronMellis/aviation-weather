/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aviation-weather/",
  plugins: [react()],
  server: {
    // Not needed anymore
    // proxy: {
    //   "/weather": {
    //     target: "https://plan.navcanada.ca/weather",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/weather/, ""),
    //   },
    // },
  },
});
