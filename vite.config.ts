import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Gyat/', // 👈 Ensure this matches your GitHub repo name
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
});
