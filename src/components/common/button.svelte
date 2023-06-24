<script lang="ts">
	// PROPS
	export let type: 'button' | 'submit' = 'button';
	export let callback: (() => void) | undefined = undefined;

	// STATE

	// LOGIC
</script>

<button {type} class="bg-off-white border-2 border-medium-gray px-1" on:click={callback}>
	<slot />
</button>
