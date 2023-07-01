import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

const manifestForPlugin = {
  registerType: "prompt",
  manifest: {
    name: "Food Market",
    short_name: "Food Market",
    description: "Just stay at home while we are preparing your best foods",
    start_url: "/",
    icons: [
      {
        src: "/maskable/icon_x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any maskable",
      },
      {
        src: "/maskable/icon_x384.png",
        type: "image/png",
        sizes: "384x384",
        purpose: "any maskable",
      },
      {
        src: "/maskable/icon_x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any maskable",
      },
    ],
    theme_color: "#ffc700",
    background_color: "#ffc700",
    display: "standalone",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
