<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { Calendar, Timer } from '@lucide/svelte';

	import hljs from 'highlight.js/lib/core';
	import python from 'highlight.js/lib/languages/python';
	import 'highlight.js/styles/github-dark.css';

	import type { Post } from '$lib/typings';
	import PostCategoryIcon from '$lib/components/ui/PostCategoryIcon.svelte';

	hljs.registerLanguage('python', python);
	hljs.registerLanguage('py', python);

	export let post: Post;
	const { title, createdAt, category, readingTime } = post;

	const formatDatePL = (date: Date) => new Intl.DateTimeFormat('pl-PL').format(new Date(date));

	const normalizeLanguage = (value: string | null) => {
		if (!value) return '';
		const lang = value.trim().toLowerCase();
		if (lang === 'python' || lang === 'py') return 'python';
		return '';
	};

	const highlightCodeBlocks = () => {
		const blocks = document.querySelectorAll<HTMLElement>('.content pre code');
		for (const block of blocks) {
			const pre = block.closest('pre');
			const sourceLang =
				pre?.getAttribute('language') ??
				pre?.getAttribute('data-language') ??
				block.getAttribute('language') ??
				block.getAttribute('data-language');

			const language = normalizeLanguage(sourceLang);
			if (language) {
				block.classList.add(`language-${language}`);
			}

			hljs.highlightElement(block);
		}
	};

	onMount(async () => {
		await tick();
		highlightCodeBlocks();
	});
</script>

<article class="post">
	<div class="header">
		<h2 class="title">
			<PostCategoryIcon categoryName={category.name} />
			{title}
		</h2>
		<div class="info">
			<span class="date">
				<Calendar size={14} />
				{formatDatePL(createdAt)}
			</span>
			<span class="date">
				<Timer size={14} />
				{readingTime} min
			</span>
		</div>
	</div>

	<div class="content">
		<slot name="content" />
	</div>

	<slot name="footer" />
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
		align-items: flex-start;
		gap: 16px;
		padding-bottom: 16px;
	}

	.info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	.date {
		display: flex;
		flex-direction: row;
		align-items: center;
		font-size: 14px;
		gap: 4px;
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

	:global(.content ol) {
		list-style: decimal;
		padding-left: 1.5rem;
		margin: 0 0 16px;
	}

	:global(.content ul) {
		list-style: disc;
		padding-left: 1.5rem;
		margin: 0 0 16px;
	}

	:global(.content li) {
		margin-bottom: 8px;
	}

	:global(.content li p) {
		padding-bottom: 8px;
	}

	:global(.content li p:last-child) {
		padding-bottom: 0;
	}

	:global(.content pre) {
		overflow-x: auto;
		border-radius: 8px;
		margin: 0 0 16px;
		background: #24292e;
	}

	:global(.content pre code) {
		display: block;
		padding: 14px 16px;
		font-family: 'Fira Mono', monospace;
		font-size: 14px;
		line-height: 1.5;
		white-space: pre;
	}

	:global(.content :not(pre) > code) {
		font-family: 'Fira Mono', monospace;
		font-size: 0.9em;
		padding: 0.1em 0.35em;
		border-radius: 4px;
		background: #f3f5f7;
	}

	@media (min-width: 610px) {
		.title {
			font-size: 24px;
		}

		.header {
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
</style>
