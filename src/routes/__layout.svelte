<script lang="ts">
	import '../app.css';
	import '../components/__style.scss';
	import Navigation from '../components/Navigation.svelte';
	import Toast from '../components/Toast.svelte';
	import Loading from '../components/Loading.svelte';
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

{#key $page}
	<main in:fade class:ready>
		<slot />
	</main>
{/key}

<footer>
	<a target="_blank" href="https://github.com/bepyan">© bepyan</a>
</footer>

<Navigation />
<Toast />
<Loading />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		opacity: 0;
		transition: opacity 400ms ease-out;
	}
	@media (max-width: 720px) {
		main {
			padding: 0rem;
		}
	}

	.ready {
		opacity: 1;
	}

	footer {
		margin-top: 2rem;
		text-align: center;
		user-select: none;
	}
	footer > a {
		color: rgba(0, 0, 0, 0.7);
	}
</style>
