import { Card } from '@mui/material';
import { PropsWithChildren } from 'react';
import { BreadCrumbs } from '../breadCrumbs/breadCrumbs';

export const Surface: React.FC<PropsWithChildren> = ({ children }) => {
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
