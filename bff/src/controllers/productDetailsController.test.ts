import { productDetailsController } from './productDetailsController.ts';
import { Request, Response, NextFunction } from 'express';
import { getProducts } from '../services/productsService.ts';
import cacheClient from '../cacheClient.ts';


jest.mock('../services/productsService');
jest.mock('../cacheClient');

const cacheClientMock = cacheClient as jest.Mocked<typeof cacheClient>;
const getProductsMock = getProducts as jest.MockedFunction<typeof getProducts>;

const productDetailsMock = {
    name: "Product_Name",
  description: "Product_Description",
  category: "Product_Category",
  price: 100,
  amount: 5,
  id: '1'
};


describe('productDetailsController', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
    let next: NextFunction;

    beforeEach(() => {
        req = { params: { id: '1' } };
        res = {
            json: jest.fn(),
        };
        next = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return cached data if available', async () => {
        cacheClientMock.get.mockReturnValue(productDetailsMock);

        await productDetailsController(req as Request, res as Response, next);

        expect(cacheClient.get).toHaveBeenCalledWith('productDetails-1');
        expect(res.json).toHaveBeenCalledWith(productDetailsMock);
        expect(getProducts).not.toHaveBeenCalled();
    });

    it('should fetch product details and cache them if not in cache', async () => {
        cacheClientMock.get.mockReturnValue(null);
        getProductsMock.mockResolvedValue({data: [productDetailsMock]});

        await productDetailsController(req as Request, res as Response, next);

        expect(cacheClient.get).toHaveBeenCalledWith('productDetails-1');
        expect(getProducts).toHaveBeenCalledWith({ id: '1' });
        expect(cacheClient.set).toHaveBeenCalledWith('productDetails-1', {data: [productDetailsMock]});
        expect(res.json).toHaveBeenCalledWith({data: [productDetailsMock]});
    });

    it('should call next with error if getProducts throws an error', async () => {
        const error = new Error('Service Error');
        cacheClientMock.get.mockReturnValue(null);
        getProductsMock.mockRejectedValue(error);

        await productDetailsController(req as Request, res as Response, next);

        expect(next).toHaveBeenCalledWith(error);
    });
});