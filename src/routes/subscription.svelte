<script context="module">
	import RadioButton from '../components/RadioButton.svelte';
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
		<div>
			<p class="label">QT 내용을 노션으로 구독 받으시고 싶으신가요?</p>
			<p>
				<a
					target="_blank"
					href="https://bepyan.notion.site/37-14-24-22cc532b12064a1d864c621260c82324"
				>
					구독 템플릿 보기
				</a>
				매일 오전 5시에 QT 본문, 해설을 신속 배송해줍니다.
			</p>
		</div>
	</section>

	<section>
		<label for="uname">사용자 아이디<input name="uname" /></label>

		<label for="notion_key">노션 키<input name="notion_key" /></label>

		<label for="database_id">데이터베이스 키<input name="database_id" /></label>

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
