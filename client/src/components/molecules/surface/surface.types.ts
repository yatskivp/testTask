import { PropsWithChildren } from 'react';

export type SurfaceProps = React.FC<
  PropsWithChildren<{ withBreadcrumbs?: boolean }>
>;
