import axios from 'axios';

import { PRODUCTS_API_URL } from '../config.ts';

export const productsAxios = axios.create({
  baseURL: PRODUCTS_API_URL,
  timeout: 1000,
});
