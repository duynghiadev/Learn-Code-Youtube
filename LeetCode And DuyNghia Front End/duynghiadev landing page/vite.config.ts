import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup");
  const viteConfig = {
    plugins: [react(), mdx.default()],
  };

  return viteConfig;
});
