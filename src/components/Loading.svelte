<script lang="ts">
	import { loading } from '$lib/store';
</script>

<div class="backdrop" class:loading={$loading}>
	<img src="https://www.nyan.cat/cats/xmas.gif" alt="loading" width="200" />
</div>

<style>
	.backdrop {
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

	.loading {
		opacity: 1;
		visibility: visible;
		background-color: #00000050;
		pointer-events: none;
	}
</style>
