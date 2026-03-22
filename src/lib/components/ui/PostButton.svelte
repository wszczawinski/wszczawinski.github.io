<script lang="ts">
	export let className: string = '';
</script>

<button class="more {className}" on:click>
	<slot />
</button>

<style>
	.more {
		display: flex;
		flex-direction: row;
		gap: 4px;
		align-items: center;
		justify-content: center;
		width: fit-content;
		padding: 4px 10px;
		align-self: flex-end;
		cursor: pointer;
		border: 1px solid #353535;
		border-radius: 4px;
		background-color: transparent;
		transition: all 0.2s ease-in-out;
		color: inherit;
		font-weight: 600;
	}

	.more:hover {
		background-color: #efefef;
	}

	:global(.more.back) {
		align-self: flex-start;
	}
</style>
