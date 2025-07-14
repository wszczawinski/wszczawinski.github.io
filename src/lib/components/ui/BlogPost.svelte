<script lang="ts">
	import type { Post } from '$lib/typings';
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import PostCategoryIcon from '$lib/components/ui/PostCategoryIcon.svelte';

	export let post: Post;
	export let isCard: boolean = false;
	const { title, content, createdAt, category, slug } = post;

	const formatDatePL = (date: Date) => new Intl.DateTimeFormat('pl-PL').format(new Date(date));

	const cutAfterFirstParagraph = (html: string) => {
		const endIndex = html.indexOf('</p>');
		if (endIndex !== -1) {
			return html.slice(0, endIndex + 4);
		}
		return html;
	};

	const goToSlug = (slug: string) => {
		goto(`/blog/${slug}`);
	};
</script>

<article class="post">
	<div class="header">
		<h2 class="title">
			<PostCategoryIcon categoryName={category.name} />
			{title}
		</h2>
		<span class="date">{formatDatePL(createdAt)}</span>
	</div>

	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="content">{@html isCard ? cutAfterFirstParagraph(content) : content}</div>

	{#if isCard}
		<button class="more" on:click={() => goToSlug(slug)}>
			More
			<ArrowRight size={16} color="#21be0c" strokeWidth="2.5" />
		</button>
	{:else}
		<button class="more back" on:click={() => goto('/blog')}>
			<ArrowLeft size={16} color="#21be0c" strokeWidth="2.5" />
			Blog
		</button>
	{/if}
</article>

<style>
	.post {
		font-family: 'Open Sans', sans-serif;
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		width: 100%;
		padding: 16px 12px 16px 12px;
		background-color: #fff;
		transition: all 0.3s ease;
		max-width: 610px;
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
		gap: 16px;
		padding-bottom: 16px;
	}

	.date {
		font-size: 14px;
		align-self: flex-end;
	}

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

	.back {
		align-self: flex-start;
	}

	.more:hover {
		background-color: #efefef;
	}

	:global(.content h3) {
		font-size: 18px;
		padding-bottom: 16px;
	}
	
	:global(.content p) {
		text-align: justify;
		font-size: 16px;
		padding-bottom: 16px;
	}

	:global(.content p a) {
		color: #21be0c;
		font-weight: 700;
	}

	@media (min-width: 610px) {
		.title {
			font-size: 24px;
		}

		.header {
			flex-direction: row;
			align-items: center;
			padding-bottom: 20px;
		}

		:global(.content p) {
			text-align: justify;
			font-size: 17px;
		}

		:global(.post h3) {
			font-size: 20px;
			padding-bottom: 20px;
		}
	}

	@media (min-width: 950px) {
		.post {
			padding: 16px 16px 16px 16px;
			max-width: 850px;
		}
	}

	:global(pre) {
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
		margin-bottom: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		position: relative; /* For the label positioning */
	}

	/* Code label */
	:global(.ql-syntax::before) {
		content: 'code';
		position: absolute;
		top: 0;
		right: 0;
		background-color: #333333;
		color: #858585;
		padding: 0.25rem 0.75rem;
		font-size: 12px;
		border-bottom-left-radius: 6px;
		border-top-right-radius: 6px;
		font-family:
			system-ui,
			-apple-system,
			sans-serif;
		text-transform: lowercase;
	}
</style>
