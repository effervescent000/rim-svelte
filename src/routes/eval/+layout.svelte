<script lang="ts">
	// PROPS

	import Button from '../../components/common/button.svelte';
	import PawnCard from '../../components/pawn-cards/pawn-card.svelte';
	import { mapPawns, selectedPawns } from '../../stores';

	// STATE
	// let search = '';

	// LOGIC
</script>

<div class="flex">
	<div>
		{#each $mapPawns as pawn}
			<PawnCard {pawn} callback={() => selectedPawns.set([pawn])} />
		{/each}
	</div>
	<div>
		<div>
			<Button callback={() => selectedPawns.set($mapPawns)}>All on map</Button>
		</div>
		<div>
			<Button
				callback={() =>
					selectedPawns.set(
						$mapPawns.filter(({ healthTracker: { healthState: state } }) => state === 'Down')
					)}
			>
				All downed
			</Button>
		</div>
	</div>
	<div>
		<slot />
	</div>
</div>
