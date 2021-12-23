<script lang="ts">
	import moment from 'moment';
	import { db } from '$lib/db';
	import type { INotion, IUser } from '@types';
	import { loadingHandler } from '../components/Loading.svelte';
	import { onToast } from '../components/Toast.svelte';

	let noResult: boolean;
	let user: IUser | null | undefined = undefined;

	const onSearchSubsciption = loadingHandler(async (e) => {
		const name: string = e.target.uname.value;
		await onSearch(name);
	});

	const onSearch = async (name: string) => {
		const { data } = await db.findUser({ name });
		user = data;
		noResult = !data;
	};

	const onDeleteUser = loadingHandler(async () => {
		const { message } = await db.deleteUser({ name: user.name });
		if (message) return alert(message);

		await onSearch(user.name);
		onToast('성공적으로 탈퇴되었습니다.');
	});

	const onDeleteSubscription = loadingHandler(async (notion: INotion) => {
		const { message } = await db.unsubscriptNotion({ name: user.name, notion });
		if (message) return alert(message);

		await onSearch(user.name);
		onToast('구독이 취소되었습니다.');
	});
</script>

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

	{#if noResult === true}
		<section>
			<p>조회되는 유저가 없습니다.</p>
		</section>
	{:else if !!user}
		<section>
			<div class="row">
				<p>노션 시크릿 토큰</p>
				<p class="wide">{user.notion_auth}</p>
				<p class="btn" on:click={onDeleteUser}>회원탈퇴</p>
			</div>
			<hr />
			{#if user.notions.length === 0}
				<p>구독중인 내역이 없습니다.</p>
			{:else}
				{#each user.notions as notion}
					<div class="row">
						<p class="btn">{notion.contentType}</p>
						<p>{moment(notion.create_date).format('YYYY.MM.DD')}</p>
						<p class="wide">{notion.database_id}</p>
						<p class="btn" on:click={() => onDeleteSubscription(notion)}>삭제</p>
					</div>
				{/each}
			{/if}
		</section>
	{/if}
</form>

<style lang="scss">
	.row {
		display: flex;
		align-items: center;
		& > :not(:last-child) {
			margin-right: 1rem;
		}
	}

	.wide {
		flex: 1;
	}

	hr {
		border: none;
	}
</style>
