import { Products } from '../types.ts';
import { productsAxios } from '../utils/productsAxios.ts';

export const getProducts: (
  queryParams?: Record<string, string>,
) => Promise<{ data: Products }> = async (queryParams = {}) => {
  try {
    const searchQueryParams = new URLSearchParams(queryParams);
    const response = await productsAxios.get(`/?${searchQueryParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error fetching products');
  }
};
