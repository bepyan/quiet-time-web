<script context="module" lang="ts">
	let container: HTMLElement;

	export const loadingHandler = (fn: any) => async (e: any) => {
		try {
			container.classList.add('show-loading');
			await fn(e);
		} finally {
			container.classList.remove('show-loading');
		}
	};
</script>

<div id="loading" bind:this={container}>
	<img src="https://www.nyan.cat/cats/xmas.gif" alt="loading" width="200" />
</div>

<style>
	#loading {
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		opacity: 0;
		visibility: hidden;
		pointer-events: none;
		background-color: transparent;
		transition: all 150ms ease-out;
	}

	img {
		-webkit-user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
</style>
