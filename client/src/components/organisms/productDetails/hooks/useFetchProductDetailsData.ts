import { useCallback } from 'react';
import { fetchProductDetails } from '../utils/fetchUtils';
import { useFetchData } from '../../../../hooks/useFetchData';
import { Product } from '../../../../types';

export const useFetchProductDetailsData = (id?: string) => {
  const fetchProductDetailsWrapper = useCallback(
    () => (id ? fetchProductDetails(id) : Promise.resolve([])),
    [id],
  );

  const { data, isLoading, error } = useFetchData<Product>(
    fetchProductDetailsWrapper,
  );

  return {
    data,
    error,
    isLoading,
  };
};
