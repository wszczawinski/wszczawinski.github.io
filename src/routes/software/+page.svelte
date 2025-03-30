<script>
	import Icon from '@iconify/svelte';

	import bearingImg from '$lib/images/projects/p_analyses.png';
	import sendEthImg from '$lib/images/projects/p_sendeth.png';
	import passiveImg from '$lib/images/projects/p_passive.png';
	import weatherImg from '$lib/images/projects/p_weather.png';
</script>

<!--Technologies-->
<section id="technologies">
	<h4 class="title">Tech Stack</h4>
	<p>
		My approach to learning is rooted in thorough exploration, involving reading of documentation,
		tutorials, and hands-on engagement through real project development. The pursuit of creating
		increasingly intricate solutions propels me to delve into a diverse array of technologies,
		fostering a dynamic and ever-evolving learning journey.
	</p>
	<p class="tech">
		<i>
			<Icon icon="material-icon-theme:typescript" />
			<span class="tooltiptext">TypeScript</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:javascript" />
			<span class="tooltiptext">JavaScript</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:react" />
			<span class="tooltiptext">React.js</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:gatsby" />
			<span class="tooltiptext">Gatsby.js</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:tailwindcss" />
			<span class="tooltiptext">Tailwind</span>
		</i>
		<i>
			<Icon icon="vscode-icons:file-type-styled" />
			<span class="tooltiptext">styled components</span>
		</i>
		<i>
			<Icon icon="logos:react-query-icon" />
			<span class="tooltiptext">Tanstack Query</span>
		</i>
	</p>
	<p class="tech">
		<i>
			<Icon icon="simple-icons:ajv" />
			<span class="tooltiptext">AJV</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:jest" />
			<span class="tooltiptext">Jest</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:storybook" />
			<span class="tooltiptext">Storybook</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:webpack" />
			<span class="tooltiptext">Webpack</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:vite" />
			<span class="tooltiptext">Vite</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:nx" />
			<span class="tooltiptext">Nx</span>
		</i>
	</p>
	<p class="tech">
		<i>
			<Icon icon="material-icon-theme:java" />
			<span class="tooltiptext">Java</span>
		</i>
		<i>
			<Icon icon="simple-icons:springboot" color="green" />
			<span class="tooltiptext">Spring Boot</span>
		</i>
		<i>
			<Icon icon="simple-icons:swagger" color="green" />
			<span class="tooltiptext">Swagger</span>
		</i>
		<i>
			<Icon icon="vscode-icons:file-type-pgsql"  />
			<span class="tooltiptext">SQL</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:python" />
			<span class="tooltiptext">Python</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:nodejs" />
			<span class="tooltiptext">Node.	js</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:gitlab" />
			<span class="tooltiptext">Gitlab CI/CD</span>
		</i>
		<i>
			<Icon icon="material-icon-theme:docker" />
			<span class="tooltiptext">Docker</span>
		</i>
	</p>
</section>
<!--Projects-->
<section id="projects" class="projects">
	<h3 class="title">My Recent Projects</h3>
	<p>
		I am excited to share a glimpse of several projects that I have recently been involved in. These
		endeavors showcase a blend of collaborative team efforts and individual initiatives, allowing me
		to continually enhance my programming skills. The latest projects have been pinned on my
		<b><a href="https://github.com/wszczawinski" target="_blank">GitHub</a></b> dashboard.
	</p>

	<div class="project-cards">
		<!--Weather-->
		<article class="card">
			<h4 class="title">Weather</h4>
			<a href="https://github.com/wszczawinski/Weather" target="_blank">
				<img class="cover" src={weatherImg} alt="Weather" />
			</a>
			<p>
				A weather application that presents only the most necessary information. Based on
				<b>React Native</b> with <b>TypeScript</b>, <b>Expo</b> and <b>React Query</b>.
			</p>
			<div class="links">
				<a href="https://github.com/wszczawinski/Weather" target="_blank">View code</a>
			</div>
		</article>
		<!--Passivhaus-->
		<article class="card">
			<h4 class="title">Passivhaus</h4>
			<a href="https://github.com/wszczawinski/Passivhaus" target="_blank">
				<img class="cover" src={passiveImg} alt="Passivhaus" />
			</a>
			<p>
				Team project - web application based on <b>Gatsby</b> for Polish Passivhaus Institute which allows
				them to show up-to-date information and sell products.
			</p>
			<div class="links">
				<a href="https://github.com/wszczawinski/Passivhaus" target="_blank">View code</a>
			</div>
		</article>
		<!--SendEth-->
		<article class="card">
			<h4 class="title">SendEth</h4>
			<a href="https://github.com/wszczawinski/send-eth" target="_blank"
				><img class="cover" src={sendEthImg} alt="SendEth" /></a
			>
			<p>
				Web3 application based on <b>React</b> and <b>Solidity</b> - connect Metamask wallet, send transactions
				on Ethereum (Rinkeby) testnet.
			</p>
			<div class="links">
				<a href="https://ethandgif.onrender.com" target="_blank">Live</a>
				<a href="https://github.com/wszczawinski/send-eth" target="_blank">View code</a>
			</div>
		</article>
		<!--Bearings measurement-->
		<article class="card">
			<h4 class="title">Bearing Analysis</h4>
			<a href="https://github.com/wszczawinski/master-thesis/tree/master/analyses" target="_blank">
				<img class="cover" src={bearingImg} alt="analyses" />
			</a>
			<p>
				Python and Jupyter based analysis of the plain bearings measurements results using data
				science methods.
			</p>
			<div class="links">
				<a
					href="https://github.com/wszczawinski/master-thesis/tree/master/analyses"
					target="_blank"
				>
					View code
				</a>
			</div>
		</article>
	</div>
</section>

<style>
	.project-cards {
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		max-width: 1000px;
	}

	.card {
		font-family: 'Open Sans', sans-serif;
		margin: 15px 20px;
		display: flex;
		flex-direction: column;
		border: 1px solid #30bd1e;
		border-radius: 8px;
		flex-basis: 200px;
		flex-shrink: 0;
		flex-grow: 1;
		max-width: 300px;
		background-color: white;
	}
	.card h4 {
		font-size: 18px;
		font-weight: 100;
		margin: 10px 20px;
		border-bottom: #555;
		text-align: left;
	}
	.card img.cover {
		width: 100%;
		border-top: 1px solid lightgray;
	}
	.card p {
		margin: 0;
		font-size: 12px;
		text-align: justify;
		padding: 20px;
		flex-grow: 2;
	}
	.card a {
		opacity: 1;
		transition: all 0.3s ease-in-out;
	}
	.card a:hover {
		opacity: 0.85;
	}

	.links {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.links a {
		margin: 0px 10px 20px 10px;
		padding: 3px;
		font-size: 12px;
		color: #555;
		border: 1px solid #555;
		width: 70px;
		text-align: center;
		border-radius: 10px;
		transform: all 0.2s ease-in-out;
	}
	.links a:hover {
		border: 1px solid #30bd1e;
		color: black;
	}
	.tech {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.6rem;
		gap: 12px;
	}
	.tech i {
		position: relative;
		cursor: pointer;
	}
	.tech i .tooltiptext {
		font-family: 'Lato', sans-serif;
		font-weight: 600;
		font-size: 0.8rem;
		position: absolute;
		visibility: hidden;
		z-index: 1;
		top: 160%;
		left: 50%;
		border-radius: 4px;
		border: 1px solid #30bd1e;
		color: black;
		text-align: center;
		padding: 5px;
		width: 80px;
		margin-top: -30px;
		margin-left: -40px;
		line-height: 1;
	}
	.tech i:hover .tooltiptext {
		visibility: visible;
	}

	@media (min-width: 480px) {
		.card {
			flex-basis: 300px;
			max-width: 400px;
			margin: 15px 20px;
			height: 400px;
		}
	}

	@media (min-width: 610px) {
		.card {
			height: 375px;
			flex-basis: 250px;
			margin: 0 20px 30px 20px;
			max-width: 300px;
		}
		.card h4 {
			margin: 20px 20px;
		}
	}
</style>
