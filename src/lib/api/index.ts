import axios from 'axios';
import type { Category, Paginated, Post, Tag } from '$lib/typings';

export const API_ENDPOINT = {
	POSTS: '/posts',
	POST_SLUG: "/posts/slug/",
	TAGS: '/tags',
	CATEGORIES: '/categories'
};

export const QUERY_KEY = {
	POSTS: 'posts',
	POST: 'post',
	TAGS: 'tags',
	CATEGORIES: 'categories'
};

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const getPosts = async () => {
	const { data } = await api.get<Paginated<Post>>(API_ENDPOINT.POSTS);
	return data;
};

export const getTags = async () => {
	const { data } = await api.get<Tag[]>(API_ENDPOINT.TAGS);
	return data;
};

export const getCategories = async () => {
	const { data } = await api.get<Category[]>(API_ENDPOINT.CATEGORIES);
	return data;
}

export const getPostBySlug = async ({ slug }: { slug: string }) => {
	const { data } = await api.get<Post>(API_ENDPOINT.POST_SLUG + slug);
	return data;
};
