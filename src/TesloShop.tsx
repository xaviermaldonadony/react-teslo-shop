import { type PropsWithChildren } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { CusomFullScreenLoading } from './components/custom/CusomFullScreenLoading';
import { useAuthStore } from './auth/store/auth.store';

const queryClient = new QueryClient();

// custom Provider
const CheckAuthProvided = ({ children }: PropsWithChildren) => {
  const { checkAuthStatus } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 1.5, // 1.5 hours
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <CusomFullScreenLoading />;

  return children;
};

export const TesloShop = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <CheckAuthProvided>
        <RouterProvider router={appRouter} />;
      </CheckAuthProvided>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
