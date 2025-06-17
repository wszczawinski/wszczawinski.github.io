<script>
	import { Github, Globe } from '@lucide/svelte';

	import newsImg from '$lib/images/projects/p_news.png';
	import blogImg from '$lib/images/projects/p_blog-api.png';
	import sendEthImg from '$lib/images/projects/p_sendeth.png';
	import passiveImg from '$lib/images/projects/p_passive.png';
	import weatherImg from '$lib/images/projects/p_weather.png';
</script>

<section>
	<h3 class="title">Recent Projects</h3>
	<p>
		Here are some of my latest projects that represent interesting challenges and learning opportunities.
		<br/>
		Each one pushes me to explore new technologies and solutions. Check out my pinned repositories
		on <b><a href="https://github.com/wszczawinski" target="_blank">GitHub</a></b> to see them in action.
	</p>
	<div class="project-cards">

		<article class="card">
			<div class="header">
				<h4>Blog API</h4>
				<div class="links">
					<a href="https://github.com/wszczawinski/BlogApi" target="_blank" title="View code">
						<Github size="16" />
					</a>
				</div>
			</div>
			<a href="https://github.com/wszczawinski/BlogApi" target="_blank">
				<img class="cover" src={blogImg} alt="Blog API" />
			</a>
			<p>
				Personal blog backend built with <b>Java 21</b>, <b>Spring Boot</b> and <b>MySQL</b>. Implements secure JWT authentication,
				CRUD operations for posts, tags and categories. Features <b>Docker Compose</b> for local development lightweight setup and
				<b>Dockerfile</b> for production builds.
			</p>
		</article>

		<article class="card">
			<div class="header">
				<h4>News</h4>
				<div class="links">
					<a href="https://github.com/wszczawinski/FullstackNews" target="_blank" title="View code">
						<Github size="16" />
					</a>
				</div>
			</div>
			<a href="https://github.com/wszczawinski/FullstackNews" target="_blank">
				<img class="cover" src={newsImg} alt="News" />
			</a>
			<p>
				Modern news platform built as a monorepo using <b>React</b>, <b>TypeScript</b>, and <b>NX</b>. Features a public
				news website and an admin panel, sharing a component library based on <b>Shadcn UI</b>. Integrates with a
				separate <b>Spring Boot</b> backend Api.
			</p>
		</article>

		<article class="card">
			<div class="header">
				<h4>Weather</h4>
				<div class="links">
					<a href="https://weather-lite.vercel.app" target="_blank" title="View live">
						<Globe size="16" />
					</a>
					<a href="https://github.com/wszczawinski/Weather" target="_blank" title="View code">
						<Github size="16" />
					</a>
				</div>
			</div>
			<a href="https://github.com/wszczawinski/Weather" target="_blank">
				<img class="cover" src={weatherImg} alt="Weather" />
			</a>
			<p>
				Minimalist weather application built with <b>React Native</b>, <b>TypeScript</b>, <b>Expo</b>, and <b>React
				Query</b>.
				Designed to provide quick access to essential weather information, focusing on frequently checked metrics in a
				clean,
				personalized interface.
			</p>
		</article>

		<article class="card">
			<div class="header">
				<h4>Passivhaus</h4>
				<div class="links">
					<a href="https://github.com/wszczawinski/Passivhaus" target="_blank" title="View code">
						<Github size="16" />
					</a>
				</div>
			</div>
			<a href="https://github.com/wszczawinski/Passivhaus" target="_blank">
				<img class="cover" src={passiveImg} alt="Passivhaus" />
			</a>
			<p>
				Team project - web application for Polish Passivhaus Institute built with <b>Gatsby</b>
				and WordPress headless CMS.
				Features automated deployments via <b>GitHub Actions</b>, triggered by WordPress webhooks.
			</p>
		</article>

		<article class="card">
			<div class="header">
				<h4>SendEth</h4>
				<div class="links">
					<a href="https://ethandgif.onrender.com" target="_blank" title="View live">
						<Globe size="16" />
					</a>
					<a href="https://github.com/wszczawinski/send-eth" target="_blank" title="View code">
						<Github size="16" />
					</a>
				</div>
			</div>
			<a href="https://github.com/wszczawinski/send-eth" target="_blank">
				<img class="cover" src={sendEthImg} alt="SendEth" />
			</a>
			<p>
				Web3 application built with <b>React</b> and <b>Solidity</b> that enables interaction with the Ethereum
				(Rinkeby) testnet.
				Users can connect their MetaMask wallet to send and track transactions on the blockchain.
			</p>
		</article>
	</div>
</section>


<style>
    .project-cards {
        padding-top: 30px;
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

    .card a {
        opacity: 1;
        transition: all 0.3s ease-in-out;
    }

    .card a:hover {
        opacity: 0.85;
    }

    .card .header h4 {
        font-size: 18px;
        font-weight: 100;
        border-bottom: #555;
        text-align: left;
    }

    .card .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 12px;
        margin: 0;
    }

    .card .header .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .card img.cover {
        width: 100%;
        border-top: 1px solid lightgray;
    }

    .card p {
        margin: 0;
        font-size: 13px;
        text-align: justify;
        padding: 12px;
        flex-grow: 2;
    }

    @media (min-width: 480px) {
        .card {
            flex-basis: 300px;
            max-width: 400px;
            margin: 15px 20px;
        }
    }

    @media (min-width: 610px) {
        .card {
            height: 350px;
            flex-basis: 250px;
            margin: 0 20px 30px 20px;
            max-width: 300px;
        }
    }
</style>
