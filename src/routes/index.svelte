<script lang="ts">
	import moment from 'moment';
	import { onMount } from 'svelte';
	import { db } from '$lib/db';
	import { copyTemplete, loading, toast } from '$lib/store';
	import { links, contentTypeList } from '$lib/mockup';
	import type { ContentType, IQTContent, IVerse } from '@types';
	import { getKoDay } from '$lib/moment';

	let qtcontent: IQTContent;
	let contentType: ContentType;

	onMount(async () => {
		loadQTContent(localStorage.getItem('contentType') || '생명의삶');
	});

	const setContentType = (type: ContentType) => {
		localStorage.setItem('contentType', type);
		loadQTContent(type);
	};

	const loadQTContent = loading.handle(async (type: ContentType) => {
		const { data, message } = await db.getQTContent({ contentType: type });
		if (!!message) return toast.onToast(message);
		contentType = type;
		qtcontent = data;
	});

	const copyToClipboard = async ({ capter, verse, text }: IVerse) => {
		try {
			const templete = copyTemplete.transferTemplete({
				contentType,
				book: qtcontent.range.book,
				capter,
				verse,
				text
			});
			await navigator.clipboard.writeText(templete);
			toast.onToast('클립보드에 복사 완료', 1000);
		} catch (e) {
			toast.onToast('[오류] 복사 실패');
			console.log(e);
		}
	};
</script>

<svelte:head>
	<title>성경묵상</title>
</svelte:head>

<section class="nav">
	{#each contentTypeList as value}
		<p class={`btn ${value === contentType && 'selected'}`} on:click={() => setContentType(value)}>
			{value}
		</p>
	{/each}
</section>

{#if qtcontent}
	<section>
		<header>
			<h2><a target="_blank" href={links[contentType]}>출처</a></h2>
			<h2>{moment(qtcontent.date).format('YYYY.MM.DD')} ({getKoDay()})</h2>
			<h1>{qtcontent.title}</h1>
			<h2>{qtcontent.range.text}</h2>
		</header>

		<div class="bible">
			{#each qtcontent.verses as { capter, verse, text }}
				{#if !verse}
					<h5>{text}</h5>
				{:else}
					<div on:click={() => copyToClipboard({ capter, verse, text })}>
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
			{#each qtcontent.commentaries as text}
				{#if text.length > 30}
					<pre>{text}</pre>
				{:else if text.length > 2}
					<h5>{text}</h5>
				{/if}
			{/each}
		</div>
	</section>
{/if}

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

	.nav {
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.nav p {
		padding: 1rem;
		color: black;
	}
	.nav .selected {
		color: var(--accent-color);
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
