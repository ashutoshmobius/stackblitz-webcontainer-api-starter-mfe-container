declare module 'single-spa-svelte' {
    import { SvelteComponent } from 'svelte';
  
    export interface SingleSpaSvelteOpts {
      component: typeof SvelteComponent;
      domElementGetter?: () => HTMLElement;
      props?: Record<string, any>;
    }
  
    export default function singleSpaSvelte(
      opts: SingleSpaSvelteOpts
    ): {
      bootstrap: () => Promise<void>;
      mount: () => Promise<void>;
      unmount: () => Promise<void>;
    };
  }
  