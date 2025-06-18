<script lang="ts">
	import { ChevronsDown } from '@lucide/svelte';
</script>

<section class="hero">
	<div class="background-image"></div>
	<div class="hero-content-area">
		<slot />
	</div>

	<div class="down-arrow pulse">
		<ChevronsDown  />
	</div>
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
