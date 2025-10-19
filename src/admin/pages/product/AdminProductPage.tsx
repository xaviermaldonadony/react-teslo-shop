// https://github.com/Klerith/bolt-product-editor
import { Navigate, useNavigate, useParams } from 'react-router';

import { useProduct } from '@/admin/hook/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';
import type { Product } from '@/interfaces/product.interface';
import { isAxiosError } from 'axios';
import { toast } from 'sonner';

export const AdminProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data: product, mutation } = useProduct(id || '');

  const title = id === 'new' ? 'New Product' : 'Edit Product';
  const subTitle =
    id === 'new'
      ? 'Here you can create a new product.'
      : 'Here you can edit the product.';

  const handleSubmitForm = async (productLike: Partial<Product>) => {
    await mutation.mutateAsync(productLike, {
      onSuccess: (data) => {
        toast.success('Product saved successfully', {
          position: 'top-right',
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError: (error) => {
        console.error(error);
        if (isAxiosError(error) && error.response) {
          const rawMessage = error.response.data.message;
          const message = Array.isArray(rawMessage)
            ? rawMessage.join(', ')
            : String(rawMessage).replace(/[()]/g, '');

          toast.error(message, { position: 'top-right' });
          return;
        }

        toast.error('An unexpected error occurred', { position: 'top-right' });
      },
    });
  };

  if (isError) {
    return <Navigate to='/admin/products' />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if (!product) {
    return <Navigate to='/admin/products' />;
  }

  return (
    <ProductForm
      title={title}
      subTitle={subTitle}
      product={product}
      onSubmit={handleSubmitForm}
      isPending={mutation.isPending}
    />
  );
};
