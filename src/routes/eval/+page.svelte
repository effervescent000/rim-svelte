<script lang="ts">
	import { get } from 'svelte/store';
	import PawnCard from '../../components/pawn-cards/pawn-card.svelte';
	import { evalStore, selectedPawns } from '../../stores';

	// PROPS

	// STATE

	// LOGIC
</script>

<div class="flex gap-10">
	{#each $selectedPawns as pawn}
		<PawnCard {pawn} values={get(evalStore).values[pawn.id]} />
	{/each}
</div>
