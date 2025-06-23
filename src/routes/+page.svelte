<script lang="ts">
	import { Rocket, IdCard, Computer } from '@lucide/svelte';

	import { ROUTES } from '$lib/constants';
	import Hero from '$lib/components/layout/Hero.svelte';
</script>

<svelte:head></svelte:head>

<Hero title="Hi, I'm Wojtek." isChevrons={false}>
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

<style>
    .hero-links {
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
    }

    .btn-hero {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        width: 220px;
    }

    @media all and (min-width: 610px) {
        .hero-links {
            align-items: flex-start;
        }

        .btn-hero {
            margin-bottom: 20px;
            width: 300px;
            margin-left: 0;
            font-size: 1.2rem;
        }
    }
</style>
