import { Box } from '@mui/material';
import groupBy from 'lodash.groupby';

import { ProductsListProps } from './productsList.types';
import { CategoryProducts } from '../../molecules/categoryProducts/categoryProducts';

export const ProductsList: ProductsListProps = ({ products }) => {
  const productsOrderedByCategory = groupBy(products, 'category');

  return (
    <Box>
      {Object.keys(productsOrderedByCategory).map(
        (category, _categoryIndex, categories) => (
          <CategoryProducts
            key={category}
            category={category}
            products={productsOrderedByCategory[category]}
            isSingleCategory={categories.length === 1}
          />
        ),
      )}
    </Box>
  );
};
