<script lang="ts">
	import { enhance } from '$app/forms';
	import { get } from 'svelte/store';
	import { config } from '../../stores';
	import Button from '../../components/common/button.svelte';

	// PROPS

	// STATE

	// LOGIC

	const settingsList = [
		{ key: 'growingSeason', label: 'Length of growing season in days' },
		{ key: 'pctNutritionFromGrowing', label: '% of food from growing' }
	];
</script>

<form method="POST" use:enhance>
	<div class="flex gap-10">
		{#each settingsList as setting}
			<label class="grid grid-cols-2 gap-2">
				<span>{setting.label}</span>
				<input name={setting.key} autocomplete="off" value={get(config)[setting.key]} />
			</label>
		{/each}
	</div>
	<Button type="submit">Save</Button>
</form>
