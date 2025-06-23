<script lang="ts">
	import { derived } from 'svelte/store';
	import { createQuery } from '@tanstack/svelte-query';

	import { getCategories, getPosts, QUERY_KEY } from '$lib/api/index.js';
	import BlogPostCard from '$lib/components/ui/BlogPostCard.svelte';
	import Section from '$lib/components/ui/Section.svelte';

	let selectedCategory: string = '';

	const posts = createQuery({
		queryKey: [QUERY_KEY.POSTS],
		queryFn: getPosts
	});

	const categories = createQuery({
		queryKey: [QUERY_KEY.CATEGORIES],
		queryFn: getCategories
	});

	const isLoading = derived([posts, categories], ([$p, $c]) => $p.isPending || $c.isPending);
	const error = derived([posts, categories], ([$p, $c]) => $p.error || $c.error);
	const canRender = derived([posts, categories], ([$p, $c]) => $p.isSuccess && $c.isSuccess);

	const filteredPosts = derived([posts], ([$p]) => {
		if (!$p.data) return [];

		if (!selectedCategory) return $p.data;
		console.log(selectedCategory);

		return $p.data.filter(post => post.category.id === selectedCategory);
	});
</script>

<div class="blog">
<Section>
	{#if $isLoading}
		<span class="loading"></span>
	{:else if $error}
		<span class="error">
			<strong>Oops!</strong>

			Something went wrong while loading the data.
			Please try refreshing the page or try again later.
		</span>
	{:else if $canRender}
		<div class="select-container">
			<!--			<select bind:value={selectedCategory}>-->
			<!--				<option value="">All Categories</option>-->
			<!--				{#each $categories.data ?? [] as category (category.id)}-->
			<!--					<option value={category.id}>{category.name}</option>-->
			<!--				{/each}-->
			<!--			</select>-->
		</div>

		{#each $filteredPosts ?? [] as post (post.id)}
			<BlogPostCard post={post} />
			<h3 class="more">More posts coming soon...</h3>
		{/each}
	{/if}
</Section>
</div>

<style>
    .blog {
        min-height: 100vh;
        width: 100%;
    }

    .select-container {
        display: flex;
        justify-content: flex-end;
        padding-top: 30px;
        position: relative;
        width: 100%;
    }

    .more {
        padding-top: 30px;
        font-size: 1.3rem;
        font-weight: 200;
    }

    /*select {*/
    /*    width: 200px;*/
    /*    padding: 0.5rem;*/
    /*    border-radius: 4px;*/
    /*    border: 1px solid #ccc;*/
    /*    outline: none;*/
    /*}*/

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

    .error {
        margin: 200px 20px;
        font-size: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    @media (min-width: 610px) {

        .select-container {
            padding-top: 70px;
        }
    }
</style>