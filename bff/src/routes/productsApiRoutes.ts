import express from 'express';
import { productsController } from '../controllers/productsController.ts';
import { productsCategoriesController } from '../controllers/productsCategoriesController.ts';
import { productDetailsController } from '../controllers/productDetailsController.ts';

const router = express.Router();

router.get('/products', productsController);

router.get('/products/categories', productsCategoriesController);

router.get('/products/:id', productDetailsController);

export default router;
