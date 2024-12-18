import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@svelte-mfe",
  app: async () => {
    // Use dynamic import to load your MFE
    const module = await import("http://localhost:5001/spa.js");
    return module;
  },
  activeWhen: ["/mfe1"],
});

registerApplication({
  name: "@react-mfe",
  app: async () => {
    // Use dynamic import to load your MFE
    const module = await import("http://localhost:5002/spa.js");
    return module;
  },
  activeWhen: ["/mfe2"],
});

// Start single-spa
start();


