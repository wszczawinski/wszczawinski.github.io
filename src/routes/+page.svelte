<script lang="ts">
	import { Rocket, IdCard, Computer } from '@lucide/svelte';

	import Hero from '$lib/components/layout/Hero.svelte';
	import { ROUTES } from '$lib/constants';
</script>

<svelte:head></svelte:head>

<Hero>
	<h1><b>Hi</b>, I'm Wojtek.</h1>
	<div class="hero-links">
		<a href={ROUTES.SOFTWARE} class="btn btn-hero">
			<Computer size="16" />
			Software Developer
		</a>
		<a href={ROUTES.MECHANICAL} class="btn btn-hero">
			<Rocket size="16" />
			Mechanical Design Engineer
		</a>
		<a href={ROUTES.ABOUT} class="btn btn-hero">
			<IdCard size="16" />
			Open to new opportunities
		</a>
	</div>
</Hero>
<section>
	<h3 class="title">Blog coming soon...</h3>
</section>

<style>
    .hero-links {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
    }

    @media all and (min-width: 610px) {
        .hero-links {
            align-items: flex-start;
        }
    }
</style>
