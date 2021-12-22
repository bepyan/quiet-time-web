<script context="module">
	import RadioButton from '../components/RadioButton.svelte';
	import { loadingHandler } from '../components/Loading.svelte';
	export const prerender = true;
</script>

<script lang="ts">
	import { db } from '$lib/inedx';

	let searchRes;

	const onSearchSubsciption = loadingHandler(async (e) => {
		const name: string = e.target.uname.value;
		searchRes = await db.findUser({ name });
		console.log(searchRes);
	});

	const onSubscript = (e) => {};
</script>

<svelte:head>
	<title>성경묵상 | 해설</title>
</svelte:head>

<form class="card" on:submit|preventDefault={onSearchSubsciption}>
	<header>
		<h1>구독 조회</h1>
	</header>

	<section>
		<label for="uname">
			사용자 아이디
			<div class="row">
				<input type="text" id="uname" />
				<button type="submit">조회하기</button>
			</div>
		</label>
	</section>
</form>

<form class="card" on:submit|preventDefault={onSubscript}>
	<header>
		<h1>가입</h1>
		<h2>
			<a target="_blank" href="https://bepyan.notion.site/bb424a05431745749e025e9df6e5d59b">
				가이드북</a
			>을 참고해서 진행해주세요!
		</h2>
	</header>

	<section>
		<label for="uname">사용자 아이디<input id="uname" /></label>

		<label for="notion_auth">노션 시크릿 토큰<input id="notion_auth" /></label>
	</section>

	<section>
		<button type="submit">등록하기</button>
	</section>
</form>

<form class="card" on:submit|preventDefault={onSubscript}>
	<header>
		<h1>구독</h1>
		<h2>
			매일 오전 5시,
			<a
				target="_blank"
				href="https://bepyan.notion.site/37-14-24-22cc532b12064a1d864c621260c82324"
			>
				QT 본문 및 해설</a
			>을 신속 배송해드립니다.
			<a
				target="_blank"
				href="https://bepyan.notion.site/1ce713edac2440d3abf639d6745703e9?v=efce438deaf3421aba251788bc6a77f3"
			>
				템플릿 보기</a
			>.
		</h2>
	</header>

	<section>
		<label for="uname">사용자 아이디<input id="uname" /></label>

		<label for="page_id">페이지 아이디<input id="page_id" /></label>

		<div>
			<p class="label">구독할 QT책</p>
			<RadioButton group="contentType" value="생명의삶" />
			<RadioButton group="contentType" value="매일성경" />
		</div>
	</section>

	<section>
		<button type="submit">구독하기</button>
		<h2>
			구독할 노션 페이지에
			<a target="_blank" href="https://bepyan.notion.site/bb424a05431745749e025e9df6e5d59b">
				'봇' 초대</a
			>을 했는지 꼭 확인해주세요.
		</h2>
	</section>
</form>

<style lang="scss">
	.row {
		display: flex;
		align-items: center;
		& > * {
			margin-right: 1rem;
		}
	}

	.label {
		margin-bottom: 0.5rem;
	}

	button {
		height: 3rem;
	}
</style>
