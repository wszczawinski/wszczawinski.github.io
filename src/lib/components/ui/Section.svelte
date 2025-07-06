<script lang="ts">
	export let title: string | null = null;
	export let isHero: boolean = false;
</script>

<section class="section" class:no-title={!title} class:top-section={!!isHero}>
	{#if title}
		<h2 class="title">{title}</h2>
	{/if}
	<div class="content">
		<slot />
	</div>
</section>

<style>
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		border-top: 1px solid rgba(201, 198, 198, 0.7);
		padding: 50px 20px;
	}

	.top-section {
		padding-top: 110px;
		min-height: 100vh;
	}

	.section .title {
		text-transform: capitalize;
		font:
			1.3rem 'Open Sans',
			sans-serif;
		text-align: center;
	}

	.section .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		max-width: 600px;
		width: 100%;
	}

	:global(.section p) {
		line-height: 1.5;
		font-size: 0.9rem;
		text-align: justify;
	}

	@media (min-width: 600px) {
		:global(.section p) {
			font-size: 1.05rem;
			text-align: center;
		}

		.section .title {
			font-size: 1.5rem;
		}

		.top-section {
			padding-top: 140px;
		}
	}

	@media (min-width: 950px) {
		.section .content {
			max-width: 900px;
		}
	}
</style>
