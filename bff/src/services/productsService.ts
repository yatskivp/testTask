import { Products } from '../types.ts';
import { productsAxios } from '../utils/productsAxios.ts';

export const getProducts: () => Promise<{ data: Products }> = async () => {
  try {
    const response = await productsAxios.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error fetching products');
  }
};
