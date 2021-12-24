<script context="module" lang="ts">
	let form: HTMLElement;
	let uname: HTMLInputElement;

	export const scrollToSubscriptionCard = (name: string) => {
		uname.value = name;
		form.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
	};
</script>

<script lang="ts">
	import { db } from '$lib/db';
	import { contentTypeList } from '$lib/mockup';
	import type { ContentType } from '@types';
	import { onToast } from '../components/Toast.svelte';
	import { loadingHandler } from '../components/Loading.svelte';
	import RadioButton from '../components/RadioButton.svelte';

	const onSubscript = loadingHandler(async (e) => {
		const name: string = e.target.uname.value;
		const page_id: string = e.target.page_id.value;
		const contentType: ContentType = e.target.contentType.value;
		if (!name || !page_id || !contentType) return onToast('빈칸을 채워주세요.');

		const { message } = await db.registerNotion({ name, page_id, contentType });
		if (!!message) return onToast(message);

		onToast('구독이 완료되었습니다 🥰');
	});
</script>

<form class="card" on:submit|preventDefault={onSubscript} bind:this={form}>
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
		<label for="uname">사용자 아이디<input id="uname" bind:this={uname} /></label>

		<label for="page_id">페이지 아이디<input id="page_id" /></label>

		<div>
			<p class="label">구독할 QT책</p>
			{#each contentTypeList as value}
				<RadioButton group="contentType" {value} />
			{/each}
		</div>
	</section>

	<section>
		<h2>10초 정도 소요될 수 있습니다.</h2>
		<button type="submit">구독하기</button>
		<h2>
			구독할 노션 페이지에
			<a target="_blank" href="https://bepyan.notion.site/bb424a05431745749e025e9df6e5d59b">
				'봇' 초대</a
			>를 했는지 꼭 확인해주세요.
		</h2>
	</section>
</form>

<style lang="scss">
	.label {
		margin-bottom: 0.5rem;
	}

	button {
		height: 3rem;
	}
</style>
