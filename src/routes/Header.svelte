<script lang="ts">
	import { ROUTES } from '../constants';
	import { page } from '$app/stores';
	import logo from '$lib/images/deer_logo.png';

	// @ts-ignore - no types for this package
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaSolidLaptopCode from 'svelte-icons-pack/fa/FaSolidLaptopCode';
	import IoRocketOutline from 'svelte-icons-pack/io/IoRocketOutline';
	import FaAddressCard from 'svelte-icons-pack/fa/FaAddressCard';
	import FaSolidBars from 'svelte-icons-pack/fa/FaSolidBars';
	import FaSolidHamburger from 'svelte-icons-pack/fa/FaSolidHamburger';

	let isMobileNavigation = false;
	const togleMobileNavVisibility = () => (isMobileNavigation = !isMobileNavigation);
</script>

<header>
	<button class="navigation-toggle" on:click={togleMobileNavVisibility}>
		<Icon src={isMobileNavigation ? FaSolidHamburger : FaSolidBars} />
	</button>

	<h3>
		<img src={logo} alt="Deer_logo" />
		<a href={ROUTES.HOME}>Wojtek Szczawiński</a>
	</h3>

	<nav id="main" class={`main-navbar ${isMobileNavigation && 'active-main'}`}>
		<li>
			<Icon src={FaSolidLaptopCode} />
			<a
				href={ROUTES.SOFTWARE}
				on:click={togleMobileNavVisibility}
				aria-current={$page.url.pathname === ROUTES.SOFTWARE ? 'page' : undefined}
			>
				software
			</a>
		</li>
		<li>
			<Icon src={IoRocketOutline} />
			<a
				href={ROUTES.MECHANICAL}
				on:click={togleMobileNavVisibility}
				aria-current={$page.url.pathname === ROUTES.MECHANICAL ? 'page' : undefined}
			>
				mechanical
			</a>
		</li>
		<li>
			<Icon src={FaAddressCard} />
			<a
				href={ROUTES.ABOUT}
				on:click={togleMobileNavVisibility}
				aria-current={$page.url.pathname === ROUTES.ABOUT ? 'page' : undefined}
			>
				about
			</a>
		</li>
	</nav>
</header>

<style>
	header {
		position: absolute;
		width: 100%;
		z-index: 100;
		display: flex;
		flex-direction: column;
		padding: 20px 20px 0;
		opacity: 1;
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

	.main-navbar li {
		margin-top: 20px;
		font-size: 0.9rem;
		display: flex;
		flex-direction: row;
		gap: 5px;
		align-items: center;
		justify-content: center;
	}

	li {
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
		.main-navbar li {
			margin: 7px 0;
		}
	}

	@media (min-width: 450px) {
		.main-navbar {
			padding: 0 12px;
		}
		.main-navbar li {
			margin: 12px 0;
		}
	}

	@media (max-width: 615px) {
		.active-main {
			opacity: 1;
			height: auto;
			align-items: flex-end;
		}

		.active-main li {
			margin-top: 10px;
			width: 100%;
			padding: 10px;
			background: #f7f7f7;
			border: 1px solid #000000;
			border-radius: 8px;
		}

		.main-navbar {
			background-color: rgba(255, 255, 255, 0.8);
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

		.main-navbar li {
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
			padding: 45px 100px;
		}

		header img {
			height: 60px;
		}

		.main-navbar li {
			margin-left: 40px;
		}
	}
</style>
