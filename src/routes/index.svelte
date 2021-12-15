<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>성경 묵상</title>
</svelte:head>

<section>
	<header>
		<h2>2021.12.15 (수)</h2>
		<h1>하나님의 정의, 심판자의 전지하심</h1>

		<h2>욥기 34 : 21~37</h2>
	</header>

	<div class="bible">
		<h5>심판자이신 하나님에 대한 변호 34:21~30</h5>
		<p><span>21</span>그는 사람의 길을 주목하시며 사람의 모든 걸음을 감찰하시나니</p>
		<p><span>22</span> 행악자는 숨을 만한 흑암이나 사망의 그늘이 없느니라</p>
		<p><span>23</span> 하나님은 사람을 심판하시기에 오래 생각하실 것이 없으시니</p>
		<p>
			<span>24</span> 세력 있는 자를 조사할 것 없이 꺾으시고 다른 사람을 세워 그를 대신하게 하시느니라
		</p>
		<p>
			<span>25</span> 그러므로 그는 그들의 행위를 아시고 그들을 밤 사이에 뒤집어엎어 흩으시는도다
		</p>
		<p><span>26</span> 그들을 악한 자로 여겨 사람의 눈 앞에서 치심은</p>
		<p><span>27</span> 그들이 그를 떠나고 그의 모든 길을 깨달아 알지 못함이라</p>
		<p>
			<span>28</span> 그들이 이와 같이 하여 가난한 자의 부르짖음이 그에게 상달하게 하며 빈궁한 사람의
			부르짖음이 그에게 들리게 하느니라
		</p>
		<p>
			<span>29</span> 주께서 침묵하신다고 누가 그를 정죄하며 그가 얼굴을 가리신다면 누가 그를 뵈올 수
			있으랴 그는 민족에게나 인류에게나 동일하시니
		</p>
		<p>
			<span>30</span> 이는 경건하지 못한 자가 권세를 잡아 백성을 옭아매지 못하게 하려 하심이니라
		</p>

		<h5>결단 촉구와 욥에 대한 평가 34:31~37</h5>

		<p>
			<span>31</span> 그대가 하나님께 아뢰기를 내가 죄를 지었사오니 다시는 범죄하지 아니하겠나이다
		</p>
		<p>
			<span>32</span> 내가 깨닫지 못하는 것을 내게 가르치소서 내가 악을 행하였으나 다시는 아니하겠나이다
			하였는가
		</p>
		<p>
			<span>33</span> 하나님께서 그대가 거절한다고 하여 그대의 뜻대로 속전을 치르시겠느냐 그러면 그대가
			스스로 택할 것이요 내가 할 것이 아니니 그대는 아는 대로 말하라
		</p>
		<p><span>34</span> 슬기로운 자와 내 말을 듣는 지혜 있는 사람은 반드시 내게 말하기를</p>
		<p><span>35</span> 욥이 무식하게 말하니 그의 말이 지혜롭지 못하도다 하리라</p>
		<p><span>36</span> 나는 욥이 끝까지 시험 받기를 원하노니 이는 그 대답이 악인과 같음이라</p>
		<p>
			<span>37</span> 그가 그의 죄에 반역을 더하며 우리와 어울려 손뼉을 치며 하나님을 거역하는 말을 많이
			하는구나
		</p>
	</div>
</section>

<style>
	section {
		display: flex;
		flex: 1;
		flex-direction: column;
		background-color: white;
	}

	header {
		padding: 3rem;
	}

	.bible {
		border-top: 1px solid #eeeeee;
		padding: 3rem;
	}
	.bible > :first-of-type {
		margin-top: 0rem;
	}

	h5 {
		margin-left: 1rem;
		margin-top: 3rem;
	}

	p {
		cursor: pointer;
		padding: 1rem;
		border-radius: 1rem;
		transition: all 200ms ease-in-out;
	}
	p:hover {
		background: #eeeeee;
	}
	span {
		margin-right: 1rem;
	}
</style>
