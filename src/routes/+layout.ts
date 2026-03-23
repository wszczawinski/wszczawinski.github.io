import { QueryClient } from '@tanstack/svelte-query';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60 * 60, // 1h
				gcTime: 1000 * 60 * 60, // 1h
				refetchOnWindowFocus: false
			}
		}
	});

	return { queryClient };
};
