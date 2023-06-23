<script lang="ts">
	import NavBar from '../nav/nav-bar.svelte';
	import PawnHeader from './pawn-header.svelte';
	import SaveFileDropzone from './save-file-dropzone.svelte';
	import WarningsWrapper from './warnings-wrapper.svelte';
	// PROPS

	// STATE

	// LOGIC
</script>

<div class="flex">
	<SaveFileDropzone />
	<PawnHeader />
	<WarningsWrapper />
</div>
<NavBar />
