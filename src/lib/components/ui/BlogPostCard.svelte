<script lang="ts">
	import type { Post } from '$lib/types';
	import PostCategoryIcon from '$lib/components/ui/PostCategoryIcon.svelte';

	export let post: Post;
	const { title, content, createdAt, category } = post;

	const formatDatePL = (date: Date) => new Intl.DateTimeFormat('pl-PL').format(new Date(date));
</script>

<article class="card">
	<div class="header">
		<h2 class="title">
			<PostCategoryIcon categoryName={category.name} />
			{title}
		</h2>
		<span class="date">{formatDatePL(createdAt)}</span>
	</div>

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div>{@html content}</div>
</article>

<style>
    .card {
        font-family: 'Open Sans', sans-serif;
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-radius: 4px;
        width: 100%;
        padding: 16px 12px 0 12px;
        background-color: #fff;
        transition: all 0.3s ease;
        max-width: 610px;
        text-align: justify;
        font-size: 17px;
    }

    .title {
        display: flex;
        align-items: center;
        gap: 16px;
        font-size: 17px;
    }

    .header {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 20px;
    }

    .date {
        font-size: 14px;
        align-self: flex-end;
    }

    :global(.card div p) {
        text-align: justify;

        font-size: 16px;
    }


    :global(.card h3) {
        font-size: 18px;
    }

    @media (min-width: 610px) {
        .title {
            font-size: 24px;
        }

        .header {
            flex-direction: row;
            align-items: center;
        }

        :global(.card div p) {
            text-align: justify;

            font-size: 17px;
        }

        :global(.card  h3) {
            font-size: 20px;
        }
    }

    @media (min-width: 950px) {
        .card {
            padding: 16px 16px 0 16px;
            max-width: 850px;
        }
    }

    :global(pre ) {
        max-width: 100%;
        color: red;
    }

    :global(.ql-syntax) {
        max-width: 100%;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-x: auto;
        padding: 1rem;
        background-color: #1e1e1e;
        color: #4ec9b0;
        border-radius: 6px;
        font-family: 'Fira Mono', monospace;
        font-size: 14px;
        line-height: 1.5;
        margin: 1rem 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        position: relative; /* For the label positioning */
    }

    /* Code label */
    :global(.ql-syntax::before) {
        content: "code";
        position: absolute;
        top: 0;
        right: 0;
        background-color: #333333;
        color: #858585;
        padding: 0.25rem 0.75rem;
        font-size: 12px;
        border-bottom-left-radius: 6px;
        border-top-right-radius: 6px;
        font-family: system-ui, -apple-system, sans-serif;
        text-transform: lowercase;
    }

</style>