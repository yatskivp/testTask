import { useParams } from 'react-router-dom';
import { useFetchProductDetailsData } from './hooks/useFetchProductDetailsData';
import { Surface } from '../../molecules/surface/surface';
import {
  Box,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { constants } from '../../../constants';
import { RenderingManager } from '../renderingManager/renderingManager';

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useFetchProductDetailsData(id);

  return (
    <Surface>
      <RenderingManager data={data} loading={isLoading} error={error}>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Typography
              variant="h2"
              textAlign={'center'}
              sx={{ fontSize: '3rem', color: constants.colors.primary }}
            >
              {`"${data[0]?.name}" details`}
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Category</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">{`${row.price} UAH`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </CardContent>
      </RenderingManager>
    </Surface>
  );
};
