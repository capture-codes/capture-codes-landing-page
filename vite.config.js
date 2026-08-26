import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [svelte()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'event-organisers': resolve(__dirname, 'event-organisers/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        'terms-of-website': resolve(__dirname, 'terms-of-website/index.html'),
        'privacy-policy': resolve(__dirname, 'privacy-policy/index.html'),
      }
    }
  }
});