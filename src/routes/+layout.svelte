<script lang="ts">
	import '../app.css';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { inject } from '@vercel/analytics';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools';

	import { onNavigate } from '$app/navigation';
	import { dev } from '$app/environment';
	import rocket from '$lib/images/rocket.svg';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';

	import type { PageData } from './$types';

	injectSpeedInsights();
	inject({ mode: dev ? 'development' : 'production' });

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

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
