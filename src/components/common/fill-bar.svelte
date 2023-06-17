<script lang="ts">
	// PROPS
	export let target: number;
	export let currentValue: number;
	export let text = '';

	// STATE
	const BAR_HEIGHT = 115;
	const BAR_WIDTH = 20;

	// LOGIC
	$: max = Math.max(target, currentValue) * 1.25;
	$: fillLevel = Math.round((currentValue / max) * BAR_HEIGHT);
	$: targetLine = Math.round((target / max) * BAR_HEIGHT);
</script>

<div class="flex gap-1 w-48">
	<div
		class={`relative bg-green-900 p-0.5 rounded-sm`}
		style="height: {BAR_HEIGHT + 4}px; width: {BAR_WIDTH + 4}px"
	>
		<div
			class={`absolute bg-green-300 bottom-[2px] z-10 rounded-sm`}
			style="height: {fillLevel}px; width: {BAR_WIDTH}px"
		/>
		<div
			class={`absolute bg-yellow-500 h-1 z-20 rounded-sm`}
			style="width: {BAR_WIDTH}px; bottom: {targetLine}px"
		/>
	</div>
	<span class="w-9/12">{text}</span>
</div>
