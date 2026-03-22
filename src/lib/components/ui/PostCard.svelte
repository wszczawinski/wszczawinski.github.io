<script lang="ts">
	import BlogPost from '$lib/components/ui/BlogPost.svelte';
	import PostButton from '$lib/components/ui/PostButton.svelte';
	import type { Post } from '$lib/typings';
	import { ArrowRight } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	export let post: Post;
	const { shortDescription, slug } = post;
</script>

<BlogPost {post}>
	<p slot="content">{shortDescription}</p>
	<PostButton slot="footer" on:click={() => goto(resolve(`/blog/${slug}`))}>
		More
		<ArrowRight size={16} color="#21be0c" strokeWidth="2.5" />
	</PostButton>
</BlogPost>
