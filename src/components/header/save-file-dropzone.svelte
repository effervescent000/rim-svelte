<script lang="ts">
	import DropFile from 'svelte-parts/DropFile.svelte';

	// PROPS

	// STATE

	// LOGIC
	const onDrop = (files: File[]) => {
		console.log(files);
	};
</script>

<DropFile {onDrop}>Drop file here</DropFile>
