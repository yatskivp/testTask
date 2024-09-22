import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { ProductDetails } from './productDetails';
import { useFetchProductDetailsData } from './hooks/useFetchProductDetailsData';
import { PropsWithChildren } from 'react';

jest.mock('./hooks/useFetchProductDetailsData', () => ({
  useFetchProductDetailsData: jest.fn(),
}));
const useFetchProductDetailsDataMock = useFetchProductDetailsData as jest.Mock;
const RouterWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <MemoryRouter initialEntries={['/products/1']}>
    <Routes>
      <Route path="/products/:id" element={children} />
    </Routes>
  </MemoryRouter>
);

const productDetailsMock = {
  data: [
    {
      name: 'Test Product',
      category: 'Test Category',
      description: 'Test Description',
      amount: 5,
      price: 100,
    },
  ],
  isLoading: false,
  error: null,
};
describe('ProductDetails', () => {
  it('should render products details correctly once data is received successfully', () => {
    useFetchProductDetailsDataMock.mockReturnValue(productDetailsMock);

    render(<ProductDetails />, { wrapper: RouterWrapper });

    expect(
      screen.getByText(`"${productDetailsMock.data[0].name}" details`),
    ).toBeDefined();
    expect(screen.getByText(productDetailsMock.data[0].category)).toBeDefined();
    expect(
      screen.getByText(productDetailsMock.data[0].description),
    ).toBeDefined();
    expect(screen.getByText(productDetailsMock.data[0].amount)).toBeDefined();
    expect(
      screen.getByText(`${productDetailsMock.data[0].price} UAH`),
    ).toBeDefined();
  });

  it('should render empty data screen if no data received', () => {
    useFetchProductDetailsDataMock.mockReturnValue({
      ...productDetailsMock,
      data: [],
    });

    render(<ProductDetails />, { wrapper: RouterWrapper });

    expect(screen.getByText('No data to display')).toBeDefined();
  });

  it('should render error screen once any issues', () => {
    useFetchProductDetailsDataMock.mockReturnValue({
      ...productDetailsMock,
      error: { message: 'Test Error' },
    });

    render(<ProductDetails />, { wrapper: RouterWrapper });

    expect(screen.getByText('Test Error')).toBeDefined();
  });

  it('should render loading screen while fetching data', () => {
    useFetchProductDetailsDataMock.mockReturnValue({
      ...productDetailsMock,
      isLoading: true,
    });

    render(<ProductDetails />, { wrapper: RouterWrapper });

    expect(screen.getByText('Loading...')).toBeDefined();
  });
});
