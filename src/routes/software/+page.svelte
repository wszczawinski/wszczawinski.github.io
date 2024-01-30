<script>
	import jsIcon from '$lib/icons/javascript-icon.svg';
	import reactIcon from '$lib/icons/react-icon.svg';
	import gatsbyIcon from '$lib/icons/gatsbyjs-icon.svg';
	import jestIcon from '$lib/icons/jest-icon.svg';
	import webpackIcon from '$lib/icons/webpack-icon.svg';
	import tsIcon from '$lib/icons/typescript-icon.svg';
	import gitIcon from '$lib/icons/git-icon.svg';
	import bashIcon from '$lib/icons/bash-icon.svg';
	import sshIcon from '$lib/icons/ssh-icon.svg';
	import pythonIcon from '$lib/icons/python-icon.svg';
	import jupiterIcon from '$lib/icons/jupyter-icon.svg';
	import octaveIcon from '$lib/icons/octave-icon.svg';

	import searchImg from '$lib/images/projects/p_picture-search.png';
	import bearingImg from '$lib/images/projects/p_analyses.png';
	import sendEthImg from '$lib/images/projects/p_sendeth.png';
	import germaniImg from '$lib/images/projects/p_germani.png';
	import passiveImg from '$lib/images/projects/p_passive.png';
	import weatherImg from '$lib/images/projects/p_weather.png';
</script>

<!--Technologies-->
<section id="technologies">
	<h4 class="title">Tech Stack</h4>
	<p>
		My learning process is always based on reading documentation, tutorials and creating real
		projects. The desire to create more complex things leads me to explore various technologies.
	</p>
	<p class="tech">
		<i>
			<img class="icon-svg" src={jsIcon} alt="javascript-icon" />
			<span class="tooltiptext">JavaScript</span>
		</i>
		<i>
			<img class="icon-svg" src={reactIcon} alt="react-icon" />
			<span class="tooltiptext">React.js</span>
		</i>
		<i>
			<img class="icon-svg" src={gatsbyIcon} alt="gatsby-icon" />
			<span class="tooltiptext">Gatsby.js</span>
		</i>
		<i>
			<img class="icon-svg" src={jestIcon} alt="jest-icon" />
			<span class="tooltiptext">Jest</span>
		</i>
		<i>
			<img class="icon-svg" src={webpackIcon} alt="webpack-icon" />
			<span class="tooltiptext">Webpack</span>
		</i>
		<i>
			<img class="icon-svg" src={tsIcon} alt="typescript-icon" />
			<span class="tooltiptext">TypeScript</span>
		</i>
		<i>
			<img class="icon-svg" src={gitIcon} alt="git-icon" />
			<span class="tooltiptext">Git</span>
		</i>
		<i>
			<img class="icon-svg" src={bashIcon} alt="bash-icon" />
			<span class="tooltiptext">Bash</span>
		</i>
		<i>
			<img class="icon-svg" src={sshIcon} alt="ssh-icon" />
			<span class="tooltiptext">SSH</span>
		</i>
		<br />
		<i>
			<img class="icon-svg" src={pythonIcon} alt="python-icon" />
			<span class="tooltiptext">Python</span>
		</i>
		<i>
			<img class="icon-svg" src={jupiterIcon} alt="jupyter-icon" />
			<span class="tooltiptext">Jupyter</span>
		</i>
		<i>
			<img class="icon-svg" src={octaveIcon} alt="octave-icon" />
			<span class="tooltiptext">Octave</span>
		</i>
	</p>
</section>
<!--Projects-->
<section id="projects" class="projects">
	<h3 class="title">My Recent Projects</h3>
	<p>
		I would like to present several projects which I am currently working on. Some of them are
		developed in team and few by myself and thereby I'm improving my programming skills.
		<br />
		Most of them are still in progress. Most recent are pinned on to
		<b><a href="https://github.com/wszczawinski" target="_blank">GitHub</a></b>
		dashboard and can be easily found there.
	</p>

	<div class="project-cards">
		<!--Weather-->
		<article class="card">
			<h4 class="title">Weather</h4>
			<a href="https://github.com/wszczawinski/Weather" target="_blank">
				<img class="cover" src={weatherImg} alt="Weather" />
			</a>
			<p>
				A weather application that presents only the most necessary information. Based on <b
					>React Native</b
				>
				with
				<b>TypeScript</b>,
				<b>Expo</b> and <b>React Query</b>.
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
		<!--GermAni-->
		<article class="card">
			<h4 class="title">GermAni</h4>
			<a href="https://github.com/Kinga-Zawarczynska/germAni" target="_blank"
				><img class="cover" src={germaniImg} alt="GermAni" /></a
			>
			<p>
				Single page website which will be a portfolio for a language school, project based on static
				solutions, configured with
				<b>Webpack</b>.
			</p>
			<div class="links">
				<a href="http://germ-ani.pl/" target="_blank">Live</a>
				<a href="https://github.com/Kinga-Zawarczynska/germAni" target="_blank">View code</a>
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
		<!--Picture Search-->
		<article class="card">
			<h4 class="title">Picture Search</h4>
			<a href="https://github.com/wszczawinski/PictureSearch" target="_blank"
				><img class="cover" src={searchImg} alt="pirture-search" /></a
			>
			<p>
				The main function of this <b>React</b> based simple <b>PWA</b> is to search for beautiful
				pictures. The aplication is fetching Unsplash native <b>API</b>.
			</p>
			<div class="links">
				<a href="https://picture-search.onrender.com" target="_blank">Live</a>
				<a href="https://github.com/wszczawinski/PictureSearch" target="_blank">View code</a>
			</div>
		</article>
		<!--Bearings measurement-->
		<article class="card">
			<h4 class="title">Bearing Analysis</h4>
			<a href="https://github.com/wszczawinski/master-thesis/tree/master/analyses" target="_blank"
				><img class="cover" src={bearingImg} alt="analyses" /></a
			>
			<p>
				Python and Jupyter based analysis of the plain bearings measurements results using data
				science methods.
			</p>
			<div class="links">
				<a href="https://github.com/wszczawinski/master-thesis/tree/master/analyses" target="_blank"
					>View code</a
				>
			</div>
		</article>
	</div>
	<!-- <h3 class="title">Python/Data Science</h3>

	<div class="project-cards">
		
	</div> -->
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
		text-align: center;
		margin-bottom: 0;
	}
	.tech i {
		padding: 3px;
		position: relative;
		cursor: pointer;
	}
	.tech .icon-svg {
		max-width: 24px;
		height: 22px;
		margin-bottom: 30px;
	}
	.tech i .tooltiptext {
		font-family: 'Lato', sans-serif;
		font-weight: 600;
		font-size: 0.8rem;
		position: absolute;
		visibility: hidden;
		z-index: 1;
		top: 100%;
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

		.tech i {
			padding: 7px;
			margin-bottom: 40px;
		}
		.tech i .tooltiptext {
			margin-top: -37px;
		}
		.tech .icon-svg {
			max-width: 28px;
			height: 25px;
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

		.tech i {
			font-size: 2rem;
			padding: 10px;
		}
		.tech .icon-svg {
			max-width: 32px;
			height: 30px;
		}
	}
</style>
