<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { contents } from '$lib/mockup';
</script>

<svelte:head>
	<title>성경묵상 | 해설</title>
</svelte:head>

<section>
	<header>
		<h2>{contents.date}</h2>
		<h1>{contents.title}</h1>

		<h2>{contents.range}</h2>
	</header>

	<div class="bible">
		{#each contents.commentaries as text}
			{#if text.length > 30}
				<pre>{text}</pre>
			{:else}
				<h5>{text}</h5>
			{/if}
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
		margin-bottom: 10%;
	}

	header {
		padding: 3rem;
		border-bottom: 1px solid #eeeeee;
	}

	.bible {
		padding: 3rem;
	}
</style>
