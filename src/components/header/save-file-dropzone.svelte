<script lang="ts">
	// import { parseString } from 'xml2js';
	import { XMLParser } from 'fast-xml-parser';

	import DropFile from 'svelte-parts/DropFile.svelte';
	import { processSaveFile } from '../../helpers/save-file-helpers';
	import { colonistStore, growingZones, mapPawns, prisonerStore, slaveStore } from '../../stores';

	// PROPS

	// STATE

	let processing = false;
	let error = '';

	// LOGIC
	const onDrop = (files: File[]) => {
		// if more than one file is dropped, reject
		console.log(files);
		if (files.length === 1) {
			const file = files[0];

			processing = true;

			const reader = new FileReader();
			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');
			reader.onload = () => {
				const parser = new XMLParser();
				const raw = parser.parse(reader.result as string);
				console.log(raw);
				const result = processSaveFile(raw);
				console.log(result);
				colonistStore.set(result.colonists);
				prisonerStore.set(result.prisoners);
				slaveStore.set(result.slaves);
				mapPawns.set(result.mapPawns);
				growingZones.set(result.growingZones);
			};
			reader.readAsText(file);

			processing = false;
		}
	};
</script>

<div class="w-32">
	<DropFile {onDrop}>
		<div
			class="p-2 rounded-md bg-off-white text-medium-purple border-light-purple border border-solid text-center"
		>
			{#if processing}
				<span>Processing...</span>
			{:else}
				<span>Drop file here</span>
			{/if}
		</div>
	</DropFile>
</div>
