import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    base: 'week6_vite/',
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
