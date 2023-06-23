<script lang="ts">
	// PROPS
	export let active = false;
	export let label: string;
	export let route: string;

	// STATE

	// LOGIC
</script>

<a class={active ? 'underline' : ''} href={route}>
	{label}
</a>
