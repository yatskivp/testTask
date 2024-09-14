import { NextFunction, Request, Response } from 'express';
import { getProductDetails } from '../services/productDetails.ts';

export const productDetailsController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.id;
    const productDetails = await getProductDetails(productId);

    res.json(productDetails);
  } catch (error) {
    next(error);
  }
};
