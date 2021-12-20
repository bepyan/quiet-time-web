<script context="module">
	import RadioButton from '$lib/RadioButton.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>성경묵상 | 해설</title>
</svelte:head>

<form class="card">
	<header>
		<h1>구독</h1>
	</header>

	<section>
		<p>QT 내용을 노션으로 구독 받으시고 싶으신가요?</p>
	</section>

	<section>
		<label for="uname">사용자 아이디<input name="uname" /></label>

		<label for="notion_key">노션 키<input name="notion_key" /></label>

		<label for="database_id">데이터베이스 아이디<input name="database_id" /></label>

		<div>
			<p class="label">구독할 QT책</p>
			<RadioButton group="contentType" value="생명의삶" />
			<RadioButton group="contentType" value="매일성경" />
		</div>
	</section>

	<section>
		<button type="submit">구독하기</button>
	</section>
</form>

<style>
	.label {
		margin-bottom: 0.5rem;
	}

	button {
		height: 3rem;
	}
</style>
