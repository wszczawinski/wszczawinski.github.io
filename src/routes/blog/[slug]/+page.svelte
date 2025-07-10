<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';

	import type { PageData } from './$types';

	import { getPostBySlug, QUERY_KEY } from '$lib/api';
	import type { Post } from '$lib/typings';
	import BlogPost from '$lib/components/ui/BlogPost.svelte';
	import Section from '$lib/components/ui/Section.svelte';
	import Loading from '$lib/components/ui/Loading.svelte';
	import Error from '$lib/components/ui/Error.svelte';

	export let data: PageData;

	const { slug } = data;

	const post = createQuery<Post>({
		queryKey: [QUERY_KEY.POST, slug],
		queryFn: () => getPostBySlug({ slug }),
		enabled: !!slug
	});
</script>

<Section isHero>
	{#if $post.isPending}
		<Loading />
	{:else if $post.error}
		<Error />
	{:else if $post.isSuccess}
		<BlogPost post={$post.data} />
	{/if}
</Section>

<style>
</style>
