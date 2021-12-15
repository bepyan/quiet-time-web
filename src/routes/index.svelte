<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>하나님의 정의, 심판자의 전지하심</h1>

	<h2>심판자이신 하나님에 대한 변호 34:21~30</h2>

	<div>
		<p>21 그는 사람의 길을 주목하시며 사람의 모든 걸음을 감찰하시나니</p>
		<p>22 행악자는 숨을 만한 흑암이나 사망의 그늘이 없느니라</p>
		<p>23 하나님은 사람을 심판하시기에 오래 생각하실 것이 없으시니</p>
		<p>24 세력 있는 자를 조사할 것 없이 꺾으시고 다른 사람을 세워 그를 대신하게 하시느니라</p>
		<p>25 그러므로 그는 그들의 행위를 아시고 그들을 밤 사이에 뒤집어엎어 흩으시는도다</p>
		<p>26 그들을 악한 자로 여겨 사람의 눈 앞에서 치심은</p>
		<p>27 그들이 그를 떠나고 그의 모든 길을 깨달아 알지 못함이라</p>
		<p>
			28 그들이 이와 같이 하여 가난한 자의 부르짖음이 그에게 상달하게 하며 빈궁한 사람의 부르짖음이
			그에게 들리게 하느니라
		</p>
		<p>
			29 주께서 침묵하신다고 누가 그를 정죄하며 그가 얼굴을 가리신다면 누가 그를 뵈올 수 있으랴 그는
			민족에게나 인류에게나 동일하시니
		</p>
		<p>30 이는 경건하지 못한 자가 권세를 잡아 백성을 옭아매지 못하게 하려 하심이니라</p>
	</div>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
