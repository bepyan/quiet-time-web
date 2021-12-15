<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<ul>
		<li class:active={$page.path === '/setting'}><a sveltekit:prefetch href="/setting">설정</a></li>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">묵상</a></li>
		<li class:active={$page.path === '/commentary'}>
			<a sveltekit:prefetch href="/commentary">해설</a>
		</li>
	</ul>
</nav>

<style>
	nav {
		pointer-events: none;
		position: sticky;
		display: flex;
		justify-content: center;
		bottom: 4rem;
		--background: rgba(255, 255, 255, 0.9);
	}

	ul {
		pointer-events: auto;
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
		box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px,
			rgba(15, 15, 15, 0.2) 0px 15px 40px;
	}

	li {
		position: relative;
		height: 100%;
		transition: all 200ms ease-in-out;
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
		align-items: center;
		height: 100%;
		padding: 0 1rem;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
