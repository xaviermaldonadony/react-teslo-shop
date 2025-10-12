import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/Components/CustomJumbotron';
import { ProductsGrid } from '@/shop/Components/ProductsGrid';
import { useProducts } from '@/shop/hooks/useProducts';
import { useParams } from 'react-router';

export const GenderPage = () => {
  const { gender } = useParams();
  const { data } = useProducts();

  const genderLabel =
    gender === 'men' ? 'Men' : gender === 'women' ? 'Women' : 'Kids';

  return (
    <>
      <CustomJumbotron title={`Products for ${genderLabel}`} />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 1} />
    </>
  );
};
