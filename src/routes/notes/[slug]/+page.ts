import { getPostBySlug, QUERY_KEY } from '$lib/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { slug } = params;
	const { queryClient } = await parent();

	if (slug) {
		await queryClient.prefetchQuery({
			queryKey: [QUERY_KEY.POST, slug],
			queryFn: () => getPostBySlug({ slug })
		});
	}

	return { slug };
};
