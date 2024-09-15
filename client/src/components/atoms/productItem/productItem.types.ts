import { Product } from '../../../types';

export type ProductItemProps = React.FC<{
  id: Product['id'];
  name: Product['name'];
}>;
