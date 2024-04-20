<script>
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { inject } from '@vercel/analytics';

	import { browser, dev } from '$app/environment';
	import favicon from '$lib/images/favicon.png';
	import faviconDark from '$lib/images/favicon_dark.png';

	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';

	let isBrowserDarkMode = false;

	if (browser) {
		isBrowserDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });
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
