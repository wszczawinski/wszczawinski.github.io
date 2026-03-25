<script lang="ts">
	export let content: string;
	export let position: 'top' | 'bottom' = 'bottom';

	const anchorName = `--tooltip-${crypto.randomUUID()}`;
</script>

<span>
	<span class="anchor" style="anchor-name: {anchorName}">
		<slot />
	</span>
	<i
		class="content"
		class:top={position === 'top'}
		class:bottom={position === 'bottom'}
		style="position-anchor: {anchorName}"
	>
		{content}
	</i>
</span>

<style>
	span {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.anchor {
		display: flex;
	}

	.content {
		font-family: 'Lato', sans-serif;
		font-weight: 600;
		font-size: 0.8rem;
		position: absolute;
		visibility: hidden;
		opacity: 0;
		transition:
			opacity 0.2s,
			visibility 0.2s,
			display 0.2s allow-discrete;
		z-index: 1;
		border-radius: 4px;
		border: 1px solid #30bd1e;
		color: black;
		text-align: center;
		padding: 5px;
		width: 80px;
		line-height: 1;
		background-color: white;
		left: anchor(center);
		transform: translateX(-50%);
	}

	.content.top {
		bottom: calc(anchor(top) + 12px);
	}

	.content.bottom {
		top: calc(anchor(bottom) + 8px);
	}

	span:hover .content {
		visibility: visible;
		opacity: 1;

		@starting-style {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
