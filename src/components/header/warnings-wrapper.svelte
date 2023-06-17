<script lang="ts">
	import type { SvelteElement } from 'svelte/internal';

	import { warnings } from '../../stores';

	import { FILL_BAR } from '../../constants/generic-constants';

	import FillBar from '../common/fill-bar.svelte';

	// PROPS

	// STATE

	// LOGIC
	const componentMapping: { [key: string]: typeof SvelteElement } = {
		[FILL_BAR]: FillBar
	};
</script>

{#each $warnings as warning}
	{#if warning.type}
		<svelte:component
			this={componentMapping[warning.type]}
			text={warning.text}
			{...warning.props}
		/>
	{:else}
		<span>WOW YOU RBOKE IT</span>
	{/if}
{/each}
