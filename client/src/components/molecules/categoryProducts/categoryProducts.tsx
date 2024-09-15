import { useEffect, useState } from 'react';
import {
  Box,
  CardActions,
  CardContent,
  Collapse,
  Typography,
} from '@mui/material';

import { ExpandMore } from '../../atoms/expandMore/expandMore';
import { CategoryProductsProps } from './categoryProducts.types';
import { constants } from '../../../constants';
import { ProductItem } from '../../atoms/productItem/productItem';

export const CategoryProducts: CategoryProductsProps = ({
  products,
  category,
  isSingleCategory,
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setExpanded(isSingleCategory);
  }, [isSingleCategory]);

  return (
    <Box>
      <CardActions
        disableSpacing
        sx={{ backgroundColor: constants.colors.primary, paddingLeft: '1rem' }}
      >
        <Typography
          component="span"
          sx={{ color: constants.colors.secondary, letterSpacing: '0.1rem' }}
        >
          {category}
        </Typography>
        <ExpandMore expand={expanded} onClick={handleExpandClick} />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {products.map(({ name, id }) => (
            <ProductItem key={id} {...{ name, id }} />
          ))}
        </CardContent>
      </Collapse>
    </Box>
  );
};
