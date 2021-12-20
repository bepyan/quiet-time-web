<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { contents } from '$lib/mockup';
	import { onToast } from '../components/Toast.svelte';

	onMount(async () => {});

	const copyToClipboard = async (val: string) => {
		try {
			await navigator.clipboard.writeText(val);
			onToast('클립보드에 복사 완료');
		} catch (e) {
			onToast('[오류] 복사 실패');
			console.log(e);
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
		{#each contents.verses as { verse, text }}
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

<section>
	<header>
		<h1>본문해설</h1>
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
		margin-bottom: 4rem;
	}

	header {
		padding: 3rem;
		border-bottom: 1px solid #eeeeee;
	}

	.bible {
		margin-top: 1rem;
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
