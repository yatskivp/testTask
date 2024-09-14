import { Product } from '../types.ts';
import { productsAxios } from '../utils/productsAxios.ts';

export const getProductDetails: (
  id: string,
) => Promise<{ data: Product }> = async (id) => {
  try {
    const searchParams = new URLSearchParams({ id });
    const response = await productsAxios.get(`/?${searchParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw new Error('Error fetching product details');
  }
};
