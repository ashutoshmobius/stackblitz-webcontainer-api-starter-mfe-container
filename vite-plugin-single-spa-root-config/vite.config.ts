import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vitePluginSingleSpa({
      type: 'root',
      importMaps: {
        type: 'importmap', // SystemJS import map
        dev: 'src/importMap.dev.json', // Development import map
        build: 'src/importMap.json', // Production import map
      },
      imo: true, // Enable import-map-overrides functionality
      imoUi: {
        variant: 'popup', // Show as popup UI
        buttonPos: 'top-right', // Position override UI at the top-right
        localStorageKey: 'my-custom-imo-ui-key', // Optional: Custom key for toggling the UI
      },
    }),
  ],
  server: {
    port: 9000, // Root-config runs on port 9000
  },
  build: {
    target: 'esnext',
    minify: false,
  },
});


