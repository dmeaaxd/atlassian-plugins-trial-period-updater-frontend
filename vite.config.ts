import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['.prettierrc.сjs'],
  },
  server: {
    proxy: {
      '/keys': 'http://127.0.0.1:8000',
    },
  },
  resolve: {
    alias: {
      '##': path.resolve(__dirname, './src'),
    },
  },
});
