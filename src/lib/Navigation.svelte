<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
		<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
	</ul>
</nav>

<style>
	nav {
		position: sticky;
		display: flex;
		justify-content: center;
		bottom: 4rem;
		--background: rgba(255, 255, 255, 0.9);
	}

	ul {
		position: relative;
		padding: 0rem 1rem;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		border-radius: 1rem;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
