import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@data': resolve(__dirname, 'src/data'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@use "@/styles/variables" as *; @use "@/styles/mixins" as *;`,
      },
    },
  },
})
