import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Rutas relativas para que funcione tanto en localhost como en GitHub Pages.
  base: './',
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
    watch: {
      ignored: ['**/.preview/**', '**/.logs/**', '**/.freebuff/**', '**/dist/**'],
    },
  },
})
