import { tesloApi } from '@/api/tesloApi';
import type { ProductResponse } from '@/interfaces/products.response';

interface Options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async (
  options: Options
): Promise<ProductResponse> => {
  const { limit, offset, sizes, gender, minPrice, maxPrice, query } = options;

  const { data } = await tesloApi.get<ProductResponse>('/products', {
    params: { limit, offset, sizes, gender, minPrice, maxPrice, q: query },
  });

  const productsWithImageUrls = data.products.map((p) => ({
    ...p,
    images: p.images.map(
      (img) => `${import.meta.env.VITE_API_URL}/files/product/${img}`
    ),
  }));

  return {
    ...data,
    products: productsWithImageUrls,
  };
};
