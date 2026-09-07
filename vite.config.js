import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// No need for @tailwindcss/vite plugin here for v3
export default defineConfig({
  plugins: [react()],
});
