<script>
	import { browser } from '$app/environment';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';

	import favicon from '$lib/images/favicon.png';
	import faviconDark from '$lib/images/favicon_dark.png';

	let isBrowserDarkMode = false;

	if (browser) {
		isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	injectSpeedInsights();
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={isBrowserDarkMode ? faviconDark : favicon} />
</svelte:head>

<div class="app">
	<Header />
	<Hero />

	<main>
		<slot />
	</main>

	<Footer />
</div>
