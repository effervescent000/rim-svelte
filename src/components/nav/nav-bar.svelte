<script lang="ts">
	import { page } from '$app/stores';
	// PROPS

	import NavItem from './nav-item.svelte';

	// STATE

	// LOGIC
	const routes = [
		{ label: 'Pawn evaluation', route: '/eval' },
		{ label: 'Group maker', route: '/group' },
		{ label: 'Settings', route: '/settings' }
	];
</script>

<div class="flex gap-5">
	{#each routes as route}
		<NavItem {...route} active={$page.url.pathname === route.route} />
	{/each}
</div>
