<script lang="ts">
	import { getName } from '../../helpers/utils';

	import type { Pawn } from '../../interfaces';
	import { evalStore } from '../../stores';
	import TilesWrapper from './tiles-wrapper.svelte';

	// PROPS
	export let pawn: Pawn;
	export let callback: (() => void) | undefined = undefined;

	// STATE

	// LOGIC
	const name = getName(pawn);
	const values = $evalStore.values[pawn.id];
</script>

<div class="w-[120px]" on:click={callback} on:keypress={callback}>
	<div class="text-center">{name}</div>

	{#if values}
		<TilesWrapper {values} />
	{/if}
</div>
