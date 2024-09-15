import { NextFunction, Request, Response } from 'express';

import { getProducts } from '../services/productsService.ts';
import cacheClient from '../cacheClient.ts';

export const productsCategoriesController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const cacheKey = 'productsCategories';
    const cachedData = cacheClient.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const products = await getProducts();
    const response = {
      data: products.data
        ? Array.from(new Set(products.data.map((product) => product.category)))
        : [],
    };
    cacheClient.set(cacheKey, response);

    res.json(response);
  } catch (error) {
    next(error);
  }
};
