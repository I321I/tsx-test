///<reference types="vitest"/>
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const baseConfig: UserConfig = {
    root: '/data/my-react',
    plugins: [react()],
    server: {
      port: 20000,
      watch: {
        usePolling: true,
        interval: 1000,
      }
    }
  }

  if (command === 'build') return { ...baseConfig, base: '/tsx-test/' }

  return baseConfig
})