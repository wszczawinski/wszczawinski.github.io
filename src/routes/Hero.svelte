<script lang="ts">
	import { page } from '$app/stores';
	import background from '$lib/images/hero_background.jpg';
	import { ROUTES } from '../constants';

	// @ts-ignore - no types for this package
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidAngleDoubleDown from 'svelte-icons-pack/fa/FaSolidAngleDoubleDown';
	import FaEnvelope from 'svelte-icons-pack/fa/FaEnvelope';
	import FaBrandsLinkedinIn from 'svelte-icons-pack/fa/FaBrandsLinkedinIn';
	import FaAddressCard from 'svelte-icons-pack/fa/FaAddressCard';
	import FaSolidLaptopCode from 'svelte-icons-pack/fa/FaSolidLaptopCode';
	import IoRocketOutline from 'svelte-icons-pack/io/IoRocketOutline';

	$: bgImage = `background-image: url("${background}");`;
</script>

<section class="hero">
	<div class="background-image" style={bgImage} />
	<div class="hero-content-area">
		{#if $page.url.pathname === ROUTES.HOME}
			<h1><b>Hi</b>, I'm Wojtek.</h1>
			<div class="hero-links">
				<a href={ROUTES.SOFTWARE} class="btn btn-hero">
					<Icon src={FaSolidLaptopCode} /> Software Developer
				</a>
				<a href={ROUTES.MECHANICAL} class="btn btn-hero">
					<Icon src={IoRocketOutline} /> Mechanical Design Engineer
				</a>
				<a href={ROUTES.ABOUT} class="btn btn-hero">
					<Icon src={FaAddressCard} /> Open to new opportunities
				</a>
			</div>
		{:else if $page.url.pathname === ROUTES.SOFTWARE}
			<h1>Software Developer</h1>
			<p class="hero-text">
				IT was always my passion and recently I have decided to dive deeper into web development and
				machine learning world. These particular branches of IT attracts me the most because they
				are still developing very quickly and the possibility of continuous improvement of my skills
				is especially important for me.
			</p>
		{:else if $page.url.pathname === ROUTES.MECHANICAL}
			<h1>Mechanical Design Engineer</h1>
			<p class="hero-text">
				My study background is mechatronics and mechanical engineering. My main interests are
				designing mechanical structures and guiding projects through all stages: from the concept
				phase, through 3D modeling, calculations and improvements, up to the implementation of
				working devices as the end result.
			</p>
		{:else if $page.url.pathname === ROUTES.ABOUT}
			<p class="hero-text">
				In everything that surrounds me, I appreciate functionality that goes hand in hand with good
				design, so I try to keep this balance in the things I create. In addition, I like
				technological innovations, sports, books and quality coffee.
			</p>
			<p class="contact-btn">
				<a href="https://www.linkedin.com/in/wszczawinski" class="btn btn-contact" target="_blank">
					<Icon src={FaBrandsLinkedinIn} /> LinkedIn
				</a>
				<a href="mailto:w.szczawinski@outlook.com" class="btn btn-contact">
					<Icon src={FaEnvelope} /> Email me
				</a>
			</p>
		{/if}
	</div>
	{#if $page.url.pathname !== ROUTES.HOME}
		<div class="down-arrow pulse">
			<Icon src={FaSolidAngleDoubleDown} />
		</div>
	{/if}
</section>

<style>
	.hero {
		position: relative;
		justify-content: center;
		text-align: center;
		min-height: 100vh;
		margin: 0;
	}

	.hero .background-image {
		background-image: url(background);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		z-index: -1;
	}

	.hero h1 {
		font:
			200 1.6rem 'Open Sans',
			sans-serif;
	}

	.hero .hero-links {
		display: flex;
		flex-direction: column;
		margin-top: 50px;
		align-items: center;
	}

	.hero .hero-text {
		width: 90%;
		max-width: 350px;
		margin: 30px auto;
		padding: 10px;
		border-radius: 8px;
		text-align: justify;
		text-justify: inter-word;
		border: 1px solid grey;
		background: rgba(247, 247, 247, 0.6);
		color: #333333;
	}

	.hero .btn-hero {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 10px;
		width: 220px;
	}

	.hero .contact-btn {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.hero-content-area {
		opacity: 0;
		margin-right: 100px;
		animation: 1s slidefade 1s forwards;
		width: 90%;
	}

	.down-arrow {
		font-size: 1.2rem;
		position: absolute;
		top: 85vh;
		animation: PulseEffect 2s infinite;
	}

	@keyframes PulseEffect {
		0% {
			opacity: 0.8;
		}
		50% {
			opacity: 0.2;
		}
		100% {
			opacity: 0.8;
		}
	}

	@media all and (min-width: 610px) {
		.hero {
			text-align: left;
		}
		.hero h1 {
			font-size: 3rem;
		}
		.hero .hero-links {
			align-items: flex-start;
		}
		.hero .hero-text {
			width: 90%;
			max-width: 630px;
			margin: 50px 0;
			padding: 15px 20px;
			border-radius: 8px;
			text-align: justify;
			text-justify: inter-word;
			border: 1px solid grey;
			background: rgba(247, 247, 247, 0.6);
		}
		.hero .btn-hero {
			margin-bottom: 20px;
			width: 300px;
			margin-left: 0;
			font-size: 1.2rem;
		}
		.hero .contact-btn {
			width: 90%;
			max-width: 630px;
			margin-left: 0;
		}
		.hero-content-area {
			width: 65%;
		}
		.down-arrow {
			font-size: 1.2rem;
			position: absolute;
			top: 90vh;
		}
	}

	@keyframes slidefade {
		100% {
			opacity: 1;
			margin: 0;
		}
	}
</style>
