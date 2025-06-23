<script lang="ts">
	import { LibraryBig, SquareTerminal, NotebookText } from '@lucide/svelte';

	export let categoryName;
</script>

{#if categoryName === "Books"}
	<LibraryBig />
{:else if categoryName === "Projects"}
	<SquareTerminal />
{:else}
	<NotebookText />
{/if}
