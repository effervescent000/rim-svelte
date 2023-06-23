<script lang="ts">
	// PROPS

	// STATE

	// LOGIC

	const settingsList = [
		{ key: 'growingSeason', label: 'Length of growing season in days' },
		{ key: 'pctNutritionFromGrowing', label: '% of food from growing' }
	];
</script>

<form method="POST">
	<div class="flex gap-10">
		{#each settingsList as setting}
			<label class="grid grid-cols-2 gap-2">
				<span>{setting.label}</span>
				<input name={setting.key} autocomplete="off" />
			</label>
		{/each}
	</div>
	<button type="submit">Save</button>
</form>
