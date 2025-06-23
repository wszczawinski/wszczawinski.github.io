<script lang="ts">
	import { ChevronsDown } from '@lucide/svelte';

	export let title: string;
	export let textContent: string | null = null;
	export let isChevrons: boolean = true;
</script>

<section class="hero">
	<div class="background-image"></div>
	<div class="hero-content-area">
		<h1>{title}</h1>

		{#if textContent}
			<p class="hero-text">{textContent}</p>
		{/if}

		<slot />
	</div>

	{#if isChevrons}
		<div class="down-arrow pulse">
			<ChevronsDown />
		</div>
	{/if}
</section>

<style>
    .hero {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
        margin: 0;
    }

    .hero .background-image {
        background-image: url('$lib/images/hero_background.jpg');
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

    .hero-content-area {
        opacity: 0;
        margin-right: 100px;
        animation: 0.6s slidefade 0.6s forwards;
        width: 90%;
    }

    h1 {
        font: 200 1.6rem 'Open Sans',
        sans-serif;
    }

    .hero-text {
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
        line-height: 1.5;
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
        h1 {
            font-size: 3rem;
        }

        .hero {
            text-align: left;
        }

        .hero-content-area {
            width: 65%;
        }

        .down-arrow {
            font-size: 1.2rem;
            position: absolute;
            top: 90vh;
        }

        .hero-text {
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
    }

    @keyframes slidefade {
        100% {
            opacity: 1;
            margin: 0;
        }
    }
</style>
