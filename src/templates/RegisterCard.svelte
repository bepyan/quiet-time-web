<script lang="ts">
	const onSubscript = (e) => {};
</script>

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
