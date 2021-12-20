<script context="module">
	import RadioButton from '../components/RadioButton.svelte';
	export const prerender = true;
</script>

<script lang="ts">
	import { db } from '$lib/inedx';

	let searchRes;

	const onSearchSubsciption = async (e) => {
		const name: string = e.target.search_uname.value;
		const searchRes = await db.findUser({ name });
	};

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
		<label for="search_uname">
			사용자 아이디
			<div class="row">
				<input type="text" id="search_uname" />
				<button type="submit">조회하기</button>
			</div>
		</label>
	</section>
</form>

<form class="card" on:submit|preventDefault={onSubscript}>
	<header>
		<h1>구독</h1>
	</header>

	<section>
		<div>
			<p class="label">QT 내용을 노션으로 구독 받으시고 싶으신가요?</p>
			<p>
				매일 오전 5시에
				<a
					target="_blank"
					href="https://bepyan.notion.site/37-14-24-22cc532b12064a1d864c621260c82324"
				>
					QT 본문, 해설</a
				>을 신속 배송해줍니다.
			</p>
		</div>
	</section>

	<section>
		<label for="uname">사용자 아이디<input id="uname" /></label>

		<label for="notion_key">노션 키<input id="notion_key" /></label>

		<label for="database_id">데이터베이스 키<input id="database_id" /></label>

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
