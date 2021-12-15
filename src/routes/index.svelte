<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { contents } from '$lib/mockup';

	const copyToClipboard = async (val: string) => {
		try {
			await navigator.clipboard.writeText(val);
			console.log('copy 완료');
		} catch (e) {
			console.log('[오류] copy 실패');
		}
	};
</script>

<svelte:head>
	<title>성경묵상</title>
</svelte:head>

<section>
	<header>
		<h2>{contents.date}</h2>
		<h1>{contents.title}</h1>

		<h2>{contents.range}</h2>
	</header>

	<div class="bible">
		{#each contents.texts as { verse, text }}
			{#if !verse}
				<h5>{text}</h5>
			{:else}
				<div on:click={() => copyToClipboard(text)}>
					<span>{verse}</span>
					<p>{text}</p>
				</div>
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
	.bible > :first-of-type {
		margin-top: 0rem;
	}
	.bible > div {
		display: flex;
		cursor: pointer;
		padding: 1rem;
		border-radius: 1rem;
		transition: all 200ms ease-in-out;
	}
	.bible > div:hover {
		background: #eeeeee;
	}

	h5 {
		margin-left: 1rem;
		margin-top: 3rem;
	}

	span {
		margin-right: 1rem;
	}

	@media (max-width: 720px) {
		header {
			padding: 1rem;
		}
		.bible {
			padding: 2rem 0.5rem 2rem 0.5rem;
		}
	}
</style>
