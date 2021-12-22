<script context="module" lang="ts">
	let removeToast: NodeJS.Timeout;
	let toast: HTMLElement;

	export const onToast = (string: string) => {
		if (toast.classList.contains('show-toast')) {
			clearTimeout(removeToast);
		}

		toast.classList.add('show-toast');
		toast.innerText = string;
		removeToast = setTimeout(() => {
			toast.classList.remove('show-toast');
		}, 1000);
	};
</script>

<div id="toast" bind:this={toast} />

<style>
	#toast {
		position: fixed;
		top: 30px;
		left: 50%;
		padding: 15px 20px;
		transform: translate(-50%, 10px);
		border-radius: 30px;
		overflow: hidden;
		font-size: 0.8rem;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.5s, visibility 0.5s, transform 0.5s;
		background: rgba(0, 0, 0, 0.4);
		color: #fff;
		z-index: 10000;
	}
</style>
