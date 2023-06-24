<script lang="ts">
	import { getName } from '../../helpers/utils';
	import type { Pawn } from '../../interfaces';

	// PROPS
	export let pawn: Pawn;
	export let callback: (() => void) | undefined = undefined;

	// STATE

	// LOGIC
	const name = getName(pawn);
</script>

<div class="w-[120px]" on:click={callback} on:keypress={callback}>
	<div class="text-center">{name}</div>
</div>
