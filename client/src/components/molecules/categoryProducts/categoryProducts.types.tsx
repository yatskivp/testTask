import { Product, Products } from '../../../types';

export type CategoryProductsProps = React.FC<{
  category: Product['category'];
  products: Products;
  isSingleCategory: boolean;
}>;
