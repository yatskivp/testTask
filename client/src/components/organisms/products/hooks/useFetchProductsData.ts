import { useCallback, useState } from 'react';
import { fetchCategories, fetchProducts } from '../utils/fetchUtils';
import { useFetchData } from '../../../../hooks/useFetchData';
import { Product } from '../../../../types';

export const useFetchProductsData = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchProductName, setSearchProductName] = useState('');

  const fetchProductsWrapper = useCallback(
    () => fetchProducts(selectedCategory, searchProductName),
    [searchProductName, selectedCategory],
  );

  const {
    data: products,
    isLoading: isProgramsLoading,
    error: productsError,
  } = useFetchData<Product>(fetchProductsWrapper);
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useFetchData<string>(fetchCategories);

  return {
    products,
    categories,
    selectedCategory,
    error: productsError || categoriesError,
    isLoading: isProgramsLoading || isCategoriesLoading,
    setSelectedCategory,
    setSearchProductName,
  };
};
