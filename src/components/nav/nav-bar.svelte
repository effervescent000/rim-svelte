<script lang="ts">
	import { page } from '$app/stores';
	// PROPS

	import NavItem from './nav-item.svelte';

	// STATE

	// LOGIC
	const routes = [
		{ label: 'Pawn evaluation', route: '/eval' },
		{ label: 'Settings', route: '/settings' },
		{ label: 'Group maker', route: '/group' }
	];
</script>

<div class="flex gap-5">
	{#each routes as route}
		<NavItem {...route} active={$page.url.pathname === route.route} />
	{/each}
</div>
