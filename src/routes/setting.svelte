<script context="module">
	export const prerender = true;
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
			<textarea id="text" />
		</label>
		<button>저장</button>
	</section>

	<section>
		<label for="pre">
			미리보기
			<pre>
				그는 사람의 길을 주목하시며 사람의 모든 걸음을 감찰하시나니
			</pre>
		</label>
	</section>
</div>

<div class="blank" />

<style>
	button {
		margin-left: auto;
	}
	.blank {
		margin-bottom: 2rem;
	}
</style>
