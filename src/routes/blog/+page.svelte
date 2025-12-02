<script lang="ts">
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';

	import { getCategories, getPosts, QUERY_KEY } from '$lib/api';
	import Section from '$lib/components/ui/Section.svelte';
	import Loading from '$lib/components/ui/Loading.svelte';
	import Error from '$lib/components/ui/Error.svelte';
	import BlogPost from '$lib/components/ui/BlogPost.svelte';
	import type { Post } from '$lib/typings';

	const queryClient = useQueryClient();

	let selectedCategory = $state('');

	const posts = createQuery(() => ({
		queryKey: [QUERY_KEY.POSTS],
		queryFn: getPosts
	}));

	const categories = createQuery(() => ({
		queryKey: [QUERY_KEY.CATEGORIES],
		queryFn: getCategories
	}));

	let filteredPosts = $derived(
		!posts.data
			? []
			: !selectedCategory
				? posts.data.content
				: posts.data.content.filter((post: Post) => post.category.id === selectedCategory)
	);

	$effect(() => {
		if (filteredPosts?.length) {
			for (const post of filteredPosts) {
				queryClient.setQueryData([QUERY_KEY.POST, post.slug], post);
			}
		}
	});
</script>

<Section isHero>
	{#if posts.isPending || categories.isPending}
		<Loading />
	{:else if posts.error || categories.error}
		<Error />
	{:else if posts.isSuccess && categories.isSuccess}
		{#each filteredPosts ?? [] as post (post.id)}
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
