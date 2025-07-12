<script lang="ts">
	import { onMount } from 'svelte';
	import { Rocket, IdCard, Computer, Hamburger, Menu, Newspaper } from '@lucide/svelte';

	import { page } from '$app/state';

	import { ROUTES } from '$lib/constants';
	import logo from '$lib/images/deer_logo.png';

	let isMobileNavigation = false;
	let isHeaderBackground = false;
	let observer: IntersectionObserver;

	const toggleMobileNavVisibility = () => (isMobileNavigation = !isMobileNavigation);
	const unsetMobileNavVisibility = () => (isMobileNavigation = false);

	onMount(() => {
		const sentinel = document.createElement('div');

		Object.assign(sentinel.style, {
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '1px',
			pointerEvents: 'none',
			opacity: '0'
		});

		document.body.prepend(sentinel);

		observer = new IntersectionObserver(
			([entry]) => {
				isHeaderBackground = !entry.isIntersecting;
			},
			{
				threshold: [1.0],
				rootMargin: '0px'
			}
		);

		observer.observe(sentinel);

		return () => {
			observer.disconnect();
			sentinel.remove();
		};
	});

	const navElements = [
		{ route: ROUTES.SOFTWARE, label: 'software', icon: Computer },
		{ route: ROUTES.MECHANICAL, label: 'mechanical', icon: Rocket },
		{ route: ROUTES.BLOG, label: 'blog', icon: Newspaper },
		{ route: ROUTES.ABOUT, label: 'about', icon: IdCard }
	];
</script>

<header class:headerBackground={isHeaderBackground || isMobileNavigation}>
	<span class="logo">
		<a href={ROUTES.HOME} on:click={isMobileNavigation ? unsetMobileNavVisibility : null}>
			<img src={logo} alt="Deer_logo" />
		</a>
	</span>

	<nav id="main" class="main-navbar" class:active-main={isMobileNavigation}>
		{#each navElements as navElement (navElement.route)}
			<a
				href={navElement.route}
				on:click={isMobileNavigation ? unsetMobileNavVisibility : null}
				aria-current={page.url.pathname === navElement.route ? 'page' : undefined}
			>
				<svelte:component this={navElement.icon} size={18} />
				<p>{navElement.label}</p>
			</a>
		{/each}
	</nav>

	<button class="navigation-toggle" on:click={toggleMobileNavVisibility}>
		{#if isMobileNavigation}
			<Hamburger color="#555" />
		{:else}
			<Menu color="#555" />
		{/if}
	</button>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 100;
		display: flex;
		flex-direction: column;
		padding: 20px;
		opacity: 1;
		transition: background-color 0.3s ease-in-out;
	}

	.headerBackground {
		background-color: rgba(255, 255, 255, 0.8);
	}

	header img {
		height: 50px;
	}

	.logo {
		width: auto;
	}

	.main-navbar {
		opacity: 0;
		height: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		gap: 16px;
		align-items: center;
	}

	.main-navbar a {
		font-size: 0.9rem;
		display: flex;
		flex-direction: row;
		gap: 10px;
		align-items: center;
		justify-content: center;
	}

	a[aria-current='page'] {
		opacity: 1;
		pointer-events: none;
		cursor: default;
		color: #21be0c;
	}

	button {
		border: none;
		background: transparent;
	}

	.navigation-toggle {
		position: absolute;
		top: 35px;
		right: 20px;
		cursor: pointer;
		font-size: 1.1rem;
	}

	@media (max-width: 610px) {
		.active-main {
			opacity: 1;
			height: auto;
			align-items: flex-end;
		}

		.active-main a {
			width: 65%;
			padding: 10px;
			border: 1px solid #000000;
			background-color: #fff;
			border-radius: 8px;
			margin: 0 auto;
		}
	}

	@media (min-width: 610px) {
		header {
			flex-direction: row;
			justify-content: space-between;
			padding: 30px;
		}

		.main-navbar {
			flex-direction: row;
			opacity: 1;
			gap: 30px;
			height: auto;
		}

		.main-navbar a {
			font-size: 1rem;
			border: none;
		}

		.navigation-toggle {
			display: none;
		}
	}

	@media (min-width: 950px) {
		header {
			padding: 30px 100px;
		}

		.logo img {
			height: 60px;
		}

		.main-navbar {
			gap: 40px;
		}
	}
</style>
