import { fetch } from '../../../../utils/fetch';

export const fetchProductDetails = async (id: string) => {
  const response = await fetch(
    `/products`,
    [{ key: 'id', value: id }],
    'Error fetching product details',
  );

  return response.data;
};
