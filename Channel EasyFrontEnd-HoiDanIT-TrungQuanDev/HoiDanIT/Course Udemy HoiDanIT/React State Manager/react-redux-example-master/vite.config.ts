import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

import dns from 'dns'
// https://vitejs.dev/config/server-options.html#server-options
//if u want to run as 127.0.0.1, comment the next line below
dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
