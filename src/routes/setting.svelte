<script context="module">
	import { browser, dev } from '$app/env';

	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head>
	<title>성경묵상 | 설정</title>
</svelte:head>

<div class="content">
	<h1>성경 묵상</h1>

	<section>
		<p>
			소스코드는
			<a href="https://github.com/bepyan/quiet-time" target="_blank">Github</a>
			에서 찾아 볼 수 있습니다.
		</p>
	</section>

	<section>
		<p>클립보드 복사 형태</p>
		<textarea />
		<button>저장</button>
	</section>

	<section>
		<p>미리보기</p>
		<pre>
			2021.12.15 (수)
			욥기 34장 21절
			그는 사람의 길을 주목하시며 사람의 모든 걸음을 감찰하시나니
		</pre>
	</section>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
		background-color: white;
		padding: 3rem;
	}

	section {
		margin-bottom: 4rem;
	}

	pre {
		padding: 2rem;
	}
</style>
