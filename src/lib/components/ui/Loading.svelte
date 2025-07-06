<script lang="ts">
</script>

<span class="loading"></span>

<style>
	.loading {
		display: inline-block;
		width: 40px;
		height: 40px;
		border: 3px solid rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		border-top-color: #30bd1e;
		animation: spin 1s ease-in-out infinite;
		margin: 200px auto;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
