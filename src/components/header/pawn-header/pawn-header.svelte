<script lang="ts">
	import { colonistStore } from '../../../stores';
	import PawnCard from '../../pawn-cards/pawn-card.svelte';

	// PROPS

	// STATE

	// LOGIC
</script>

<div class="flex gap-8">
	{#each $colonistStore as colonist}
		<PawnCard pawn={colonist} />
	{/each}
</div>
