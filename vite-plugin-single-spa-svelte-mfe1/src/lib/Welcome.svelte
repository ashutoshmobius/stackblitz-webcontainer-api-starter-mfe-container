<script lang="ts">
    export let name: string | undefined = undefined;
</script>

<div>
    <p>Welcome, <span class="text-primary">{name ? name : ' person or thing '}!</span><b> to svelte mfe</b></p>
    <button class="btn btn-secondary">{name ? 'Sign out' : 'Sign in'}</button>
</div>
