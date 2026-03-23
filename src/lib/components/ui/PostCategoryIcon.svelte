<script lang="ts">
	import { LibraryBig, SquareTerminal, NotebookText } from '@lucide/svelte';
	import Tooltip from './Tooltip.svelte';

	export let categoryName;
</script>

{#if categoryName === 'Books'}
	<Tooltip content="Books">
		<LibraryBig />
	</Tooltip>
{:else if categoryName === 'Projects'}
	<Tooltip content="Projects">
		<SquareTerminal />
	</Tooltip>
{:else}
	<NotebookText />
{/if}
