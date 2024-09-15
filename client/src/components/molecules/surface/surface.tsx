import { Card } from '@mui/material';

import { BreadCrumbs } from '../breadCrumbs/breadCrumbs';
import { SurfaceProps } from './surface.types';

export const Surface: SurfaceProps = ({ children }) => {
  return (
    <Card
      sx={{
        maxWidth: 800,
        margin: 'auto',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      <BreadCrumbs />
      {children}
    </Card>
  );
};
