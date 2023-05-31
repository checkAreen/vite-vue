import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
      renderLegacyChunks: true,
    }),
  ],
  build: {
    base: './',
    assetsInlineLimit: 0,
    outDir: 'dist',
    emptyOutDir: true,
  }
});