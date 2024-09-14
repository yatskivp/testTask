import { Request, Response, NextFunction } from 'express';
import { ProductsFilter } from '../types.ts';
import Products from '../models/Products.ts';

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  const productsFilter: ProductsFilter = {};

  try {
    if (req.query.category) {
      productsFilter.category = String(req.query.category);
    }
    if (req.query.name) {
      productsFilter.name = String(req.query.name);
    }

    const products = await Products.find(productsFilter);

    res.json({ data: products });
  } catch (error: unknown) {
    next(error);
  }
};
