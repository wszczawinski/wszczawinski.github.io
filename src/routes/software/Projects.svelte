<script>
	import Section from '$lib/components/ui/Section.svelte';
	import ProjectCard from '$lib/components/ui/ProjectCard.svelte';

	import newsImg from '$lib/images/projects/p_news.png';
	import blogImg from '$lib/images/projects/p_blog-api.png';
	import sendEthImg from '$lib/images/projects/p_sendeth.png';
	import passiveImg from '$lib/images/projects/p_passive.png';
	import weatherImg from '$lib/images/projects/p_weather.png';
</script>

<Section title="Recent Projects">
	<p>
		Here are some of my latest projects that represent interesting challenges and learning
		opportunities.
		<br />
		Each one pushes me to explore new technologies and solutions. Check out my pinned repositories on
		<b><a href="https://github.com/wszczawinski" target="_blank">GitHub</a></b> to see them in action.
	</p>

	<div class="project-cards">
		<ProjectCard
			project={{
				name: 'Blog API',
				img: blogImg,
				linkCode: 'https://github.com/wszczawinski/BlogApi'
			}}
		>
			<svelte:fragment>
				Personal blog backend built with <b>Java 21</b>, <b>Spring Boot</b> and <b>MySQL</b>.
				Implements secure JWT authentication, CRUD operations for posts, tags and categories.
				Features <b>Docker Compose</b> for local development lightweight setup and
				<b>Dockerfile</b> for production builds.
			</svelte:fragment>
		</ProjectCard>

		<ProjectCard
			project={{
				name: 'News',
				img: newsImg,
				linkCode: 'https://github.com/wszczawinski/FullstackNews'
			}}
		>
			<svelte:fragment>
				Modern news platform built as a monorepo using <b>React</b>, <b>TypeScript</b>, and
				<b>NX</b>. Features a public news website and an admin panel, sharing a component library
				based on
				<b>Shadcn UI</b>. Integrates with a separate <b>Spring Boot</b> backend Api.
			</svelte:fragment>
		</ProjectCard>

		<ProjectCard
			project={{
				name: 'Weather',
				img: weatherImg,
				linkLive: 'https://weather-lite.vercel.app',
				linkCode: 'https://github.com/wszczawinski/Weather'
			}}
		>
			<svelte:fragment>
				Minimalist weather application built with <b>React Native</b>, <b>TypeScript</b>,
				<b>Expo</b>, and <b>React Query</b>. Designed to provide quick access to essential weather
				information, focusing on frequently checked metrics in a clean, personalized interface.
			</svelte:fragment>
		</ProjectCard>

		<ProjectCard
			project={{
				name: 'Passivhaus',
				img: passiveImg,
				linkLive: 'https://pibp.pl',
				linkCode: 'https://github.com/wszczawinski/Passivhaus'
			}}
		>
			<svelte:fragment>
				Team project - web application for Polish Passivhaus Institute built with <b>Gatsby</b>
				and WordPress headless CMS. Features automated deployments via <b>GitHub Actions</b>,
				triggered by WordPress webhooks.
			</svelte:fragment>
		</ProjectCard>

		<ProjectCard
			project={{
				name: 'SendEth',
				img: sendEthImg,
				linkLive: 'https://ethandgif.onrender.com',
				linkCode: 'https://github.com/wszczawinski/send-eth'
			}}
		>
			<svelte:fragment>
				Web3 application built with <b>React</b> and <b>Solidity</b> that enables interaction with the
				Ethereum (Rinkeby) testnet. Users can connect their MetaMask wallet to send and track transactions
				on the blockchain.
			</svelte:fragment>
		</ProjectCard>
	</div>
</Section>

<style>
	.project-cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 40px;
	}

	p {
		line-height: 1.5;
		font-size: 0.9rem;
		text-align: justify;
	}

	@media (min-width: 600px) {
		p {
			font-size: 1.05rem;
			text-align: center;
		}
	}
</style>
