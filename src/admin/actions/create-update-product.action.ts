import { tesloApi } from '@/api/tesloApi';
import type { Product } from '@/interfaces/product.interface';
import { sleep } from '@/lib/sleep';

export const createUpdateProductAction = async (
  productLike: Partial<Product> & { files?: File[] }
): Promise<Product> => {
  await sleep(1000);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, user, images = [], files = [], ...newData } = productLike;

  const isCreating = id === 'new';

  newData.stock = Number(newData.stock || 0);
  newData.price = Number(newData.price || 0);

  // Preapre images
  if (files.length > 0) {
    const newImageNames = await uploadFile(files);
    images.push(...newImageNames);
  }

  const imagesToSave = images.map((img) => {
    if (img.includes('http')) return img.split('/').pop() || '';
    return img;
  });

  const { data } = await tesloApi<Product>({
    url: isCreating ? '/products' : `/products/${id}`,
    method: isCreating ? 'POST' : 'PATCH',
    data: {
      ...newData,
      images: imagesToSave,
    },
  });

  const img = data.images.map((img) => {
    if (img.includes('http')) return img;
    return `${import.meta.env.VITE_API_URL}/files/product/${img}`;
  });

  return {
    ...data,
    images: img,
  };
};

export interface FileUploadResponse {
  secureUl: string;
  fileName: string;
}

const uploadFile = async (files: File[]) => {
  const uploadPromises = files.map(async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const { data } = await tesloApi.post<FileUploadResponse>(
      '/files/product',
      formData
    );
    return data.fileName;
  });

  return await Promise.all(uploadPromises);
};
