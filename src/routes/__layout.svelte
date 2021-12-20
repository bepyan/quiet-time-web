<script lang="ts">
	import '../app.css';
	import '../components/__style.scss';
	import Navigation from '../components/Navigation.svelte';
	import Toast from '../components/Toast.svelte';
</script>

<main>
	<slot />
</main>

<Navigation />
<Toast />

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
	}
</style>
