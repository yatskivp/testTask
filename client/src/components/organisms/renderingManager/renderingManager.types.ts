import { PropsWithChildren } from 'react';
import { ValidationError } from '../../../types';

export type RenderingManagerProps = React.FC<
  PropsWithChildren<{
    data: any[];
    loading: boolean;
    error: ValidationError | null;
  }>
>;
