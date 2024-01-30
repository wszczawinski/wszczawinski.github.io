<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<footer class="footer">
	<div class="copy">&copy; Wojtek Szczawinski</div>
	<div class="socials">
		<a href="https://github.com/wszczawinski" target="_blank">
			<Icon icon="fa-brands:github-square" class="icon" />
		</a>

		<a href="https://www.linkedin.com/in/wszczawinski" target="_blank">
			<Icon icon="fa-brands:linkedin" class="icon" />
		</a>
	</div>
</footer>

<style>
	footer {
		font-size: 0.8rem;
		border-top: 1px solid rgba(201, 198, 198, 0.7);
		display: flex;
		justify-content: space-between;
		padding: 30px 20px;
		margin: 0 auto;
		width: 100%;
	}

	.socials {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}

	:global(.icon path) {
		fill: #555;
	}

	@media (min-width: 600px) {
		footer {
			font-size: 1rem;
			padding: 40px 50px;
		}

		.socials {
			gap: 45px;
			font-size: 1.2rem;
		}
	}

	@media (min-width: 950px) {
		footer {
			padding: 45px 100px;
		}
	}
</style>
