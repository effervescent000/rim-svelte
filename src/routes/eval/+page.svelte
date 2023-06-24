<script lang="ts">
	import { get } from 'svelte/store';
	import PawnCard from '../../components/pawn-cards/pawn-card.svelte';
	import { evalStore, selectedPawns } from '../../stores';

	// PROPS

	// STATE

	// LOGIC
</script>

{#each $selectedPawns as pawn}
	<PawnCard {pawn} values={get(evalStore).values[pawn.id]} />
{/each}
