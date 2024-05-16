import { QueryClient } from '@tanstack/react-query';

const globalQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 6000 * 1000,
        },
    },
});

export default globalQueryClient;
