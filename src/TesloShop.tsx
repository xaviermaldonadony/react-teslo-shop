import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';

export const TesloShop = () => {
  return <RouterProvider router={appRouter} />;
};
