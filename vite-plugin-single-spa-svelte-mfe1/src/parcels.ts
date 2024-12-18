import Welcome from "./lib/Welcome.svelte";
import singleSpaSvelte from 'single-spa-svelte';

export const welcomeParcel = singleSpaSvelte({
    component: Welcome as any
});
