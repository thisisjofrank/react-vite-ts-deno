import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import "react";
import "react-dom";

export default defineConfig({
  root: "./client",
  server: {
    port: 3000,
  },
  plugins: [react()],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
