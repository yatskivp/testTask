import { NextFunction, Request, Response } from 'express';
import { getProducts } from '../services/productsService.ts';
import cacheClient from '../cacheClient.ts';

export const productDetailsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.id;

    const cacheKey = `productDetails-${productId}`;
    const cachedData = cacheClient.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const productDetails = await getProducts({id: productId});
    cacheClient.set(cacheKey, productDetails);

    res.json(productDetails);
  } catch (error) {
    next(error);
  }
};
