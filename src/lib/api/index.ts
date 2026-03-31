import type { Category, Paginated, Post, Tag } from '$lib/typings';

export const API_ENDPOINT = {
	POSTS: '/posts',
	POST_SLUG: '/posts/slug/',
	TAGS: '/tags',
	CATEGORIES: '/categories'
};

export const QUERY_KEY = {
	POSTS: 'posts',
	POST: 'post',
	TAGS: 'tags',
	CATEGORIES: 'categories'
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const fetchJson = async <T>(url: string): Promise<T> => {
	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json'
		}
	});

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response.json();
};

export const getPosts = async () => {
	return fetchJson<Paginated<Post>>(BASE_URL + API_ENDPOINT.POSTS);
};

export const getTags = async () => {
	return fetchJson<Tag[]>(BASE_URL + API_ENDPOINT.TAGS);
};

export const getCategories = async () => {
	return fetchJson<Category[]>(BASE_URL + API_ENDPOINT.CATEGORIES);
};

export const getPostBySlug = async ({ slug }: { slug: string }) => {
	return fetchJson<Post>(BASE_URL + API_ENDPOINT.POST_SLUG + slug);
};
