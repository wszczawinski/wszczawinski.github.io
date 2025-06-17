<script lang="ts">
	import { Rocket, IdCard, Computer, Hamburger, Menu } from '@lucide/svelte';
	import { page } from '$app/state';
	import logo from '$lib/images/deer_logo.png';

	import { ROUTES } from '$lib/constants';

	let isMobileNavigation = false;
	let windowPosition = 0;

	const togleMobileNavVisibility = () => (isMobileNavigation = !isMobileNavigation);

	const checkScrollPosition = () => {
		windowPosition = window.scrollY;
	};

	const navElements = [
		{ route: ROUTES.SOFTWARE, label: 'software', icon: Computer },
		{ route: ROUTES.MECHANICAL, label: 'mechanical', icon: Rocket },
		{ route: ROUTES.ABOUT, label: 'about', icon: IdCard }
	];
</script>

<svelte:window on:scroll={checkScrollPosition} />

<header class={`${!!windowPosition && `headerBackground`}`}>
	<button class="navigation-toggle" on:click={togleMobileNavVisibility}>
		{#if isMobileNavigation}
			<Hamburger />
		{:else}
			<Menu />
		{/if}
	</button>

	<h3>
		<img src={logo} alt="Deer_logo" />
		<a href={ROUTES.HOME}>Wojtek Szczawiński</a>
	</h3>

	<nav id="main" class={`main-navbar ${isMobileNavigation && 'active-main'}`}>
		{#each navElements as navElement (navElement.route)}
			<a
				href={navElement.route}
				on:click={togleMobileNavVisibility}
				aria-current={page.url.pathname === navElement.route ? 'page' : undefined}
			>
				<svelte:component this={navElement.icon} size={18} />
				<p>{navElement.label}</p>
			</a>
		{/each}
	</nav>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        display: flex;
        flex-direction: column;
        padding: 20px;
        opacity: 1;
    }

    .headerBackground {
        background-color: rgba(255, 255, 255, 0.8);
        transition: all 0.5s ease-in-out;
    }

    header img {
        height: 50px;
    }

    header h3 {
        font-family: 'Quicksand', sans-serif;
        font-size: 1.25rem;
        display: flex;
        align-items: center;
    }

    .main-navbar {
        opacity: 0;
        height: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-navbar a {
        margin-top: 20px;
        font-size: 0.9rem;
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        justify-content: center;
    }

    a {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
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

    @media (max-width: 450px) {
        .main-navbar {
            padding: 0 7px;
        }

        .main-navbar a {
            margin: 7px 0;
        }
    }

    @media (min-width: 450px) {
        .main-navbar {
            padding: 0 12px;
        }

        .main-navbar a {
            margin: 12px 0;
        }
    }

    @media (max-width: 615px) {
        .active-main {
            opacity: 1;
            height: auto;
            align-items: flex-end;
        }

        .active-main a {
            margin-top: 10px;
            width: 100%;
            padding: 10px;
            background: #f7f7f7;
            border: 1px solid #000000;
            border-radius: 8px;
        }

        .main-navbar {
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 5px;
        }
    }

    @media (min-width: 615px) {
        header {
            flex-direction: row;
            justify-content: space-between;
            padding: 30px;
        }

        .main-navbar {
            height: auto;
            opacity: 1;
            flex-direction: row;
            padding: 0;
        }

        .main-navbar a {
            width: 100%;
            margin: 0;
            margin-left: 20px;
            font-size: 1rem;
        }

        .navigation-toggle {
            display: none;
        }
    }

    @media (min-width: 950px) {
        header {
            padding: 35px 100px;
        }

        header img {
            height: 60px;
        }

        .main-navbar a {
            margin-left: 40px;
        }
    }
</style>
