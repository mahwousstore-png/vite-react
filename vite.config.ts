import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification for production
    minify: 'esbuild',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Manual chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    // Target modern browsers for smaller bundle size (ES2020 for better compatibility)
    target: 'es2020',
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
  // Enable performance optimizations
  esbuild: {
    // Remove debugger statements in production
    drop: ['debugger'],
  },
})
