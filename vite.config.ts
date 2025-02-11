import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Gyat/', // <-- Add your repository name as the base path
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './index.html', // Ensure correct input file
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Ensure correct alias for src
    },
  },
});
