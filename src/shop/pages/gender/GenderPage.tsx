import { CustomPagination } from '@/components/custom/CustomPagination';
import { products } from '@/mocks/products.mocks';
import { CustomJumbotron } from '@/shop/Components/CustomJumbotron';
import { ProductsGrid } from '@/shop/Components/ProductsGrid';
import { useParams } from 'react-router';

export const GenderPage = () => {
  const { gender } = useParams();
  const genderLabel =
    gender === 'men' ? 'Men' : gender === 'women' ? 'Women' : 'Kids';

  return (
    <>
      <CustomJumbotron title={`Products for ${genderLabel}`} />
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  );
};
