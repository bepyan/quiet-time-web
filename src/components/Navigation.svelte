<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	let scrollY = 0;
	let offsetY = 0;
	let hide = false;

	$: {
		hide = scrollY > 0 && scrollY - offsetY > 0;
		offsetY = scrollY;
	}
</script>

<svelte:window bind:scrollY />

<nav class:hide>
	<ul>
		<li class:active={$page.path === '/setting'}>
			<a sveltekit:prefetch href="{base}/setting">설정</a>
		</li>
		<li class:active={$page.path === '/'}><a sveltekit:prefetch href="{base}/">묵상</a></li>
		<li class:active={$page.path === '/subscription'}>
			<a sveltekit:prefetch href="{base}/subscription">구독</a>
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
		transition: all 200ms ease-in-out;
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
		background: rgba(255, 255, 255, 0.75);
		background-size: contain;
		border-radius: 1rem;
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
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
		text-shadow: none;
	}

	.hide {
		transform: translateY(40px);
		opacity: 0;
		visibility: hidden;
	}
</style>
