<script lang="ts">
	import Tooltip from '../common/tooltip.svelte';

	// PROPS
	export let src: string;
	export let label: number | undefined = undefined;
	export let reasons: Record<string, number>[] | undefined = undefined;

	// STATE

	// LOGIC
</script>

<div>
	<Tooltip>
		<div slot="tooltip">
			{#if label !== undefined && reasons !== undefined}
				{#each reasons as { reason, value }}
					<div>
						{reason}: {value}
					</div>
				{/each}
			{/if}
		</div>
		<div slot="content" class="h-10">
			{#if label}
				{label}
			{/if}
			<img {src} alt="tile" class={label ? 'h-2/4' : 'h-full'} />
		</div>
	</Tooltip>
</div>
