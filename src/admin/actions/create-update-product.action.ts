import { tesloApi } from '@/api/tesloApi';
import type { Product } from '@/interfaces/product.interface';
import { sleep } from '@/lib/sleep';

export const createUpdateProductAction = async (
  productLike: Partial<Product>
): Promise<Product> => {
  await sleep(1000);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, user, images = [], ...newData } = productLike;

  const isCreating = id === 'new';

  newData.stock = Number(newData.stock || 0);
  newData.price = Number(newData.price || 0);
  console.log(newData);
  console.log(newData.stock, newData.price, isCreating);

  const { data } = await tesloApi<Product>({
    url: isCreating ? '/products' : `/products/${id}`,
    method: isCreating ? 'POST' : 'PATCH',
    data: newData,
  });

  const img = data.images.map((img) => {
    if (img.includes('http')) return img;
    return `${import.meta.env.VITE_API_URL}/files/product/${img}`;
  });
  console.log('iamges', images);

  return {
    ...data,
    images: img,
  };
};
