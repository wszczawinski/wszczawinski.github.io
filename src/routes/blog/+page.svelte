<script lang="ts">
	import { derived } from 'svelte/store';
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';

	import { getCategories, getPosts, QUERY_KEY } from '$lib/api/index.js';
	import Section from '$lib/components/ui/Section.svelte';
	import Loading from '$lib/components/ui/Loading.svelte';
	import Error from '$lib/components/ui/Error.svelte';
	import BlogPost from '$lib/components/ui/BlogPost.svelte';

	const queryClient = useQueryClient();

	let selectedCategory: string = '';

	const posts = createQuery({
		queryKey: [QUERY_KEY.POSTS],
		queryFn: getPosts
	});

	$: if ($filteredPosts?.length) {
		for (const post of $filteredPosts) {
			// Push each individual post into the cache under its own slug key
			queryClient.setQueryData([QUERY_KEY.POST, post.slug], post);
		}
	}

	const categories = createQuery({
		queryKey: [QUERY_KEY.CATEGORIES],
		queryFn: getCategories
	});

	const isLoading = derived([posts, categories], ([$p, $c]) => $p.isPending || $c.isPending);
	const error = derived([posts, categories], ([$p, $c]) => $p.error || $c.error);
	const canRender = derived([posts, categories], ([$p, $c]) => $p.isSuccess && $c.isSuccess);

	const filteredPosts = derived([posts], ([$p]) => {
		if (!$p.data) return [];

		if (!selectedCategory) return $p.data.content;
		console.log(selectedCategory);

		return $p.data.content.filter((post) => post.category.id === selectedCategory);
	});
</script>

<Section isHero>
	{#if $isLoading}
		<Loading />
	{:else if $error}
		<Error />
	{:else if $canRender}
		{#each $filteredPosts ?? [] as post (post.id)}
			<BlogPost {post} isCard />
		{/each}
		<h3 class="more">More posts coming soon...</h3>
	{/if}
</Section>

<style>
	.more {
		padding-top: 30px;
		font-size: 1.2rem;
		font-weight: 200;
	}
</style>
