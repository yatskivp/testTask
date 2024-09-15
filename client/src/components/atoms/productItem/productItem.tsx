import { Link, Typography } from '@mui/material';
import { ProductItemProps } from './productItem.types';
import { constants } from '../../../constants';

export const ProductItem: ProductItemProps = ({ name, id }) => {
  return (
    <Typography variant="body1" sx={{ marginBottom: '.5rem' }}>
      <Link href={`${constants.routes.products}/${id}`}>{name}</Link>
    </Typography>
  );
};
