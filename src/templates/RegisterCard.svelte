<script lang="ts">
	import { db } from '$lib/db';
	import { scrollToSubscriptionCard } from './SubscriptionCard.svelte';
	import { links } from '$lib/mockup';
	import { loading, toast } from '$lib/store';

	const onSubscript = loading.handle(async (e) => {
		const name: string = e.target.uname.value;
		const notion_auth: string = e.target.notion_auth.value;
		if (!name || !notion_auth) return toast.onToast('빈칸을 채워주세요.');

		const { message } = await db.registerUser({ name, notion_auth });
		if (message) return toast.onToast(message);

		e.target.reset();
		toast.onToast('가입을 성공했습니다 😘');
		scrollToSubscriptionCard(name);
	});
</script>

<form class="card" on:submit|preventDefault={onSubscript}>
	<header>
		<h1>가입</h1>
		<h2>
			<a target="_blank" href={links.구독가이드}>가이드북</a>을 참고해서 진행해주세요!
		</h2>
	</header>

	<section>
		<label for="uname">사용자 아이디<input id="uname" /></label>

		<label for="notion_auth"
			>노션 시크릿 토큰
			<a target="_blank" href={links.노션통합등록}>생성</a>
			<input id="notion_auth" />
		</label>
	</section>

	<section>
		<button type="submit">등록하기</button>
	</section>
</form>
