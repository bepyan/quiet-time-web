<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import { copyTemplete } from '$lib/store';
	import { onMount } from 'svelte';

	let textarea: HTMLTextAreaElement;
	let input = $copyTemplete;
	let exampleText: string;

	$: exampleText = copyTemplete.transferTemplete(
		{
			contentType: '생명의삶',
			book: '욥기',
			capter: 34,
			verse: 21,
			text: '그는 사람의 길을 주목하시며 사람의 모든 걸음을 감찰하시나니'
		},
		input
	);

	onMount(() => {
		resize();
	});

	const resize = () => {
		textarea.style.height = 'auto';
		textarea.style.height = textarea.scrollHeight + 'px';
	};

	const onKeyup = (e) => {
		input = e.target.value;
		resize();
	};

	const onSave = () => {
		copyTemplete.keyup(input);
		alert('성공적으로 저장되었습니다.');
	};

	const onReset = () => {
		copyTemplete.reset();
		input = $copyTemplete;
	};
</script>

<svelte:head>
	<title>성경묵상 | 설정</title>
</svelte:head>

<div class="card">
	<header>
		<h1>설정</h1>
	</header>

	<section>
		<p>
			소스코드는
			<a href="https://github.com/bepyan/quiet-time" target="_blank">Github</a>
			에서 찾아 볼 수 있습니다.
		</p>
	</section>

	<section>
		<label for="text">
			클립보드 복사 형태
			<textarea id="text" bind:this={textarea} value={input} on:keyup={onKeyup} />
		</label>
		<div class="btnSet">
			<button class="secondBtn" on:click={onReset}>리셋</button>
			<button on:click={onSave}>저장</button>
		</div>
	</section>

	<section>
		<label for="pre">
			미리보기
			<pre>
				{exampleText}
			</pre>
		</label>
	</section>
</div>

<style>
	textarea {
		height: auto;
	}

	.btnSet {
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.btnSet > * {
		margin-left: 1rem;
	}
</style>
