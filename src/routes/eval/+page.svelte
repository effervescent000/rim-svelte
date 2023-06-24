<script lang="ts">
	import PawnCard from '../../components/pawn-cards/pawn-card.svelte';
	import { selectedPawns } from '../../stores';

	// PROPS

	// STATE

	// LOGIC
</script>

{#each $selectedPawns as pawn}
	<PawnCard {pawn} />
{/each}
