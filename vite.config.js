import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

export default defineConfig({
  base: './', // Ensures assets load correctly on GitHub Pages and local dev
  plugins: [
    basicSsl()
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    https: true
  }
});
