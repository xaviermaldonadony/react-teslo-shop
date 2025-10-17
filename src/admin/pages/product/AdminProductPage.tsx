// https://github.com/Klerith/bolt-product-editor

import { Navigate, useParams } from 'react-router';

import { useProduct } from '@/admin/hook/useProduct';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';

export const AdminProductPage = () => {
  const { id } = useParams();

  const { isLoading, isError, data: product } = useProduct(id || '');

  const title = id === 'new' ? 'New Product' : 'Edit Product';
  const subTitle =
    id === 'new'
      ? 'Here you can create a new product.'
      : 'Here you can edit the product.';

  if (isError) {
    return <Navigate to='/admin/products' />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if (!product) {
    return <Navigate to='/admin/products' />;
  }

  return <ProductForm title={title} subTitle={subTitle} product={product} />;
};
