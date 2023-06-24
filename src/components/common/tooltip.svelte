<script lang="ts">
	// PROPS

	// STATE
	let isHovered = false;

	// LOGIC

	const mouseOver = () => {
		isHovered = true;
	};

	const mouseOut = () => {
		isHovered = false;
	};
</script>

<div class="relative">
	<div class={`absolute ${!isHovered && 'invisible'} z-10`}>
		<slot name="tooltip" />
	</div>

	<div on:mouseenter={mouseOver} on:mouseleave={mouseOut}>
		<slot name="content" />
	</div>
</div>
