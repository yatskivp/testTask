import { Box } from '@mui/material';
import { ErrorScreenProps } from './errorScreen.types';

export const ErrorScreen: ErrorScreenProps = ({ error }) => {
  return (
    <Box sx={{ padding: '1rem' }}>
      <h1>Error: {error.status}</h1>
      <p>{error.message}</p>
      <p>{error.stack}</p>
    </Box>
  );
};
