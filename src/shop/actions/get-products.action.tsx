import { tesloApi } from '@/api/tesloApi';
import type { ProductResponse } from '@/interfaces/products.response';

interface Options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
}

export const getProductsAction = async (
  options: Options
): Promise<ProductResponse> => {
  const { limit, offset, sizes, gender, minPrice, maxPrice } = options;

  console.log({ minPrice, maxPrice });

  const { data } = await tesloApi.get<ProductResponse>('/products', {
    params: { limit, offset, sizes, gender, minPrice, maxPrice },
  });

  const productsWithImageUrls = data.products.map((p) => ({
    ...p,
    images: p.images.map(
      (img) => `${import.meta.env.VITE_API_URL}/files/product/${img}`
    ),
  }));
  console.log(data);
  console.log(productsWithImageUrls);

  return {
    ...data,
    products: productsWithImageUrls,
  };
};
