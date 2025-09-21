import { CustomPagination } from '@/components/custom/CustomPagination';
import { products } from '@/mocks/products.mocks';
import { CustomJumbotron } from '@/shop/Components/CustomJumbotron';
import { ProductsGrid } from '@/shop/Components/ProductsGrid';

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title='All Products' />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  );
};
