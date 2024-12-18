import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

const svelteLifecycles = singleSpaSvelte({
  component: App as any,
  domElementGetter: () => document.getElementById("svelte-app") || createRootElement(),
  props: { someData: "data" },
});


function createRootElement() {
  const el = document.createElement("div");
  el.id = "svelte-app";
  document.body.appendChild(el);
  return el;
}

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;