import { getCategories, getPosts, QUERY_KEY } from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: [QUERY_KEY.POSTS],
		queryFn: getPosts
	});

	await queryClient.prefetchQuery({
		queryKey: [QUERY_KEY.CATEGORIES],
		queryFn: getCategories
	});
};
