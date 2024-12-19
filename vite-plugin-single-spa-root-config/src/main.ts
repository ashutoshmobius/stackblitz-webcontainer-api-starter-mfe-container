import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@svelte-mfe",
  app: async () => {
    // Use dynamic import to load your MFE
    //update url for localhost http://localhost:5001/spa.js
    const module = await import("https://stackblitzwebcontainerapistart-3oh0--5001--c8c182a3.local-credentialless.webcontainer.io/spa.js");
    return module;
  },
  activeWhen: ["/mfe1"],
});

registerApplication({
  name: "@react-mfe",
  app: async () => {
    // Use dynamic import to load your MFE
    const module = await import("https://stackblitzwebcontainerapistart-3oh0--5002--c8c182a3.local-credentialless.webcontainer.io/spa.js");
    return module;
  },
  activeWhen: ["/mfe2"],
});

// Start single-spa
start();


