import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

export const TesloShop = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={appRouter} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
