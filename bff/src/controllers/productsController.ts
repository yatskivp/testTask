import { NextFunction, Request, Response } from 'express';

import { getProducts } from '../services/productsService.ts';

export const productsController = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};
