import { defineConfig } from 'vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isStackblitz = !!process.env.STACKBLITZ;

  return {
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
    base: isStackblitz ? './' : '/', // Ensure compatibility in Stackblitz
    server: {
      host: isStackblitz, // Required for Stackblitz
      port: 9000, // Root-config runs on port 9000
      strictPort: true, // Ensure the server doesn't fallback to another port
      open: !isStackblitz, // Disable auto-browser open in Stackblitz
    },
    build: {
      target: 'esnext',
      minify: false,
    },
    optimizeDeps: {
      exclude: ['single-spa', 'systemjs'], // Avoid pre-bundling single-spa and systemjs
    },
  };
});
