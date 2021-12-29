<script lang="ts">
	import { toast } from '$lib/store';
</script>

<div class="toast" class:show={$toast.show}>
	{$toast.text}
</div>

<style>
	.toast {
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

	.show {
		opacity: 1;
		visibility: visible;
		transform: translate(-50%, 0);
	}
</style>
