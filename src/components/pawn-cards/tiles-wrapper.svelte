<script lang="ts">
	import BleedingOut from '../../images/Bleeding.png';
	import Town from '../../images/Town.png';
	import Slave from '../../images/Slavery.png';

	import Tile from './tile.svelte';
	import type { PawnValues } from '../../interfaces';

	// PROPS
	export let values: PawnValues;

	// STATE

	// LOGIC
	const IMAGE_MAPPING: Record<string, string> = {
		bleedingOut: BleedingOut,
		colonist: Town,
		slave: Slave
	};

	const makeTiles = () => {
		console.log(values);
		const tiles: { src: string; label?: number; reasons?: Record<string, number>[] }[] = [];
		Object.entries(values).forEach(([key, value]) => {
			if (key === 'bleedingOut') {
				tiles.push({ src: IMAGE_MAPPING[key] });
			} else {
				tiles.push({ src: IMAGE_MAPPING[key], label: value.value, reasons: value.reasons });
			}
		});
		return tiles;
	};

	const tiles = makeTiles();
</script>

<div class="flex justify-between">
	{#each tiles as tile}
		<Tile {...tile} />
	{/each}
</div>
