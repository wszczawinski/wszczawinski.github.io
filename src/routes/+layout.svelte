<script>
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"

	import Header from './Header.svelte';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';

	injectSpeedInsights();
</script>

<div class="app">
	<Header />
	<Hero />

	<main>
		<slot />
	</main>

	<Footer />
</div>
