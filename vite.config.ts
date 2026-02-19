///<reference types="vitest"/>
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { githubPagesSpa } from "@sctg/vite-plugin-github-pages-spa";

// https://vite.dev/config/
export default defineConfig(() => {
  const baseConfig: UserConfig = {
    base: '/tsx-test/',
    plugins: [react(),
    githubPagesSpa({
      verbose: false
    })],
    server: {
      port: 20000,
      watch: {
        usePolling: true,
        interval: 1000,
      }
    }
  }
  return baseConfig
})
