import { fetch } from '../../../../utils/fetch';

export const fetchProducts = async (category?: string, name?: string) => {
  const response = await fetch(
    '/products',
    [
      { key: 'category', value: category },
      { key: 'name', value: name },
    ],
    'Error fetching products',
  );

  return response.data;
};

export const fetchCategories = async () => {
  const response = await fetch(
    '/products/categories',
    [],
    'Error fetching categories',
  );

  return response.data;
};
