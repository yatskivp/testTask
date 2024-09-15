import { Box, debounce, Typography } from '@mui/material';

import { ProductsList } from '../../molecules/productsList/productsList';
import { ProductsProps } from './products.types';
import { constants } from '../../../constants';
import { QuickSearch } from '../../molecules/quickSearch/quickSearch';
import { useFetchProductsData } from './hooks/useFetchProductsData';
import { RenderingManager } from '../../molecules/renderingManager/renderingManager';
import { Surface } from '../../molecules/surface/surface';

export const Products: ProductsProps = () => {
  const {
    products,
    categories,
    selectedCategory,
    setSearchProductName,
    setSelectedCategory,
    error,
    isLoading,
  } = useFetchProductsData();

  return (
    <Surface withBreadcrumbs={false}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem 0',
          gap: '1rem',
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: '3rem', color: constants.colors.primary }}
        >
          {constants.title}
        </Typography>
        <Box sx={{ width: '50%' }}>
          <QuickSearch
            selectLabel={constants.quickSearchSelectLabel}
            filterInputLabel={constants.quickSearchInputLabel}
            selectedValue={selectedCategory}
            options={categories.map((category) => ({
              label: category,
              value: category,
            }))}
            handleSelectChange={setSelectedCategory}
            handleInputChange={debounce(setSearchProductName, 500)}
          />
        </Box>
      </Box>
      <RenderingManager data={products} loading={isLoading} error={error}>
        <ProductsList products={products} />
      </RenderingManager>
    </Surface>
  );
};
