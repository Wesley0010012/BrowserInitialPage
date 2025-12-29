import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

// Possible Strategy: Vite Single File
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
  },
});
