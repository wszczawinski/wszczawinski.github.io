<script lang="ts">
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { inject } from '@vercel/analytics';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';

	import { dev } from '$app/environment';
	import rocket from '$lib/images/rocket.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import type { PageData } from './$types';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });

	export let data: PageData;
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={rocket} />
</svelte:head>

<QueryClientProvider client={data.queryClient}>
	<div class="app">
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
	</div>
	<SvelteQueryDevtools />
</QueryClientProvider>
