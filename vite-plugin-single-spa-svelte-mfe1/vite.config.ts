import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isStackblitz = !!process.env.STACKBLITZ;

  return {
    plugins: [
      svelte(),
      vitePluginSingleSpa({
        type: 'mife',
        serverPort: isStackblitz ? 5001 : 5001, // Adjust for Stackblitz
        spaEntryPoints: 'src/spa.ts', // Svelte parcel entry point
      }),
    ],
    base: isStackblitz ? './' : '/', // Use relative base path in Stackblitz
    server: {
      host: isStackblitz, // Expose the server in Stackblitz
      port: 5001, // Ensure the Svelte app runs on port 5001
      strictPort: true, // Prevent fallback to other ports
      open: !isStackblitz, // Disable auto-browser open in Stackblitz
    },
    build: {
      target: 'esnext',
      minify: false,
      rollupOptions: {
        input: 'src/spa.ts', // Svelte Single-SPA entry point
        preserveEntrySignatures: 'exports-only',
        output: {
          exports: 'auto',
          format: 'esm',
          entryFileNames: 'spa.js', // Ensure consistent naming
        },
      },
    },
  };
});
