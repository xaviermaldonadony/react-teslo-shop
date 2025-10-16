import { useQuery } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id.actions';

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 100 * 60 * 5, // 5mins
  });

  // Todo mutate

  return {
    ...query,
  };
};
