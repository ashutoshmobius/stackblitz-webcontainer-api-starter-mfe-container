import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    svelte(),
    vitePluginSingleSpa({
        type: "mife",
        serverPort: 5001,
        // spaEntryPoints: 'src/parcels.ts'//export a parcel by default point to src/spa/js
        // projectId?: string;
        // cssStrategy?: "singleMife" | "multiMife" | "none";
        // assetFileNames?: string;
   }),
  ],
  server: {
    port: 5001, // Svelte micro-frontend runs on port 5001
  },
  build: {
    target: 'esnext',
    minify: false,
    rollupOptions: {
      input: "src/spa.ts",
      preserveEntrySignatures: "exports-only",
      output: {
        exports: "auto",
        format: "esm",
        entryFileNames: "spa.js",
      }
    }
  }

});
