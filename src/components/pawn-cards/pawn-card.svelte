<script lang="ts">
	import { getName } from '../../helpers/utils';
	import type { Pawn } from '../../interfaces';

	// PROPS
	export let pawn: Pawn;

	// STATE

	// LOGIC
	const name = getName(pawn);
</script>

<div class="w-[120px]">
	<div class="text-center">{name}</div>
</div>
