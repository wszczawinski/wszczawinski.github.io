import axios from 'axios';
import type { Category, Post, Tag } from '$lib/types';

export const API_ENDPOINT = {
	POSTS: '/posts',
	TAGS: '/tags',
	CATEGORIES: '/categories'
};

export const QUERY_KEY = {
	POSTS: 'posts',
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
	const { data } = await api.get<Post[]>(API_ENDPOINT.POSTS);
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
