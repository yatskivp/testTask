import { NextFunction, Request, Response } from 'express';

import { getProducts } from '../services/productsService.ts';

export const productsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await getProducts(req.query as Record<string, string>);
    res.json(products);
  } catch (error) {
    next(error);
  }
};
