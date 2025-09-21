import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },   // dev server port
  build: { outDir: "dist" }, // production output
  // root is now site/ by default, no need to set root
});