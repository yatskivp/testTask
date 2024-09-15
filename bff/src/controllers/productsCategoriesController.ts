import { NextFunction, Request, Response } from 'express';

import { getProducts } from '../services/productsService.ts';

export const productsCategoriesController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await getProducts();

    res.json({
      data: products.data
        ? Array.from(new Set(products.data.map((product) => product.category)))
        : [],
    });
  } catch (error) {
    next(error);
  }
};
