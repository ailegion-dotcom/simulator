import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change the base path to match the repository name
export default defineConfig({
  plugins: [react()],
  base: "/red-legion-sim/",
});