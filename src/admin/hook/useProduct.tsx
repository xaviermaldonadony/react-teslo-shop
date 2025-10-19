import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id.actions';
import { createUpdateProductAction } from '../actions/create-update-product.action';
import type { Product } from '@/interfaces/product.interface';

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 100 * 60 * 5, // 5mins
  });

  // mutate
  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      // console.log('product saved', product);
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({
        queryKey: ['products', { id: product.id }],
      });

      // update querydata
      queryClient.setQueryData(['products', { id: product.id }], product);
    },
    onError: (error) => {
      console.log('error on mutation', error);
    },
    // To do
    // Invalidate cache
    //update querydata
  });

  // const handleSubmitForm = async (product: Partial<Product>) => {
  //   console.log({ product });
  // };

  return {
    ...query,
    // handleSubmitForm,
    mutation,
  };
};
