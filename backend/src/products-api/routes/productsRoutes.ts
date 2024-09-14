import express from 'express';

import { getProducts } from '../controllers/getProducts.ts';

const router = express.Router();

router.get('/products', getProducts);

export default router;
