import { NextFunction, Request, Response } from 'express';

import { getProducts } from '../services/productsService.ts';
import cacheClient from '../cacheClient.ts';

export const productsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const cacheKey = `products-${Buffer.from(JSON.stringify(req.query), 'utf8').toString('base64')}`;
    const cachedData = cacheClient.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const products = await getProducts(req.query as Record<string, string>);
    cacheClient.set(cacheKey, products);

    res.json(products);
  } catch (error) {
    next(error);
  }
};
