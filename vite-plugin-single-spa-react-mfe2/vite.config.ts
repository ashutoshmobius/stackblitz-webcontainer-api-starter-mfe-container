import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isStackblitz = mode === "dev" ? !!process.env.STACKBLITZ : !!process.env.STACKBLITZ;

  return {
    plugins: [
      react(),
      vitePluginSingleSpa({
        type: 'mife',
        serverPort: isStackblitz ? 5002 : 5002, // Ensure it adapts for Stackblitz
        spaEntryPoints: 'src/spa.tsx', // Entry point for the micro-frontend
      }),
    ],
    base: isStackblitz ? './' : '/', // Ensure paths work in Stackblitz
    server: {
      host: isStackblitz, // Ensure the app is accessible in Stackblitz
      port: 5002, // Port for the React app
      strictPort: true, // Ensure the server doesn't change the port
      open: !isStackblitz, // Open the browser only in local development
    },
    build: {
      target: 'esnext',
      minify: false,
      rollupOptions: {
        input: 'src/spa.tsx',
        preserveEntrySignatures: 'exports-only',
        output: {
          exports: 'auto',
          format: 'esm',
          entryFileNames: 'spa.js',
        },
      },
    },
  };
});
