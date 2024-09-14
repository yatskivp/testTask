import { Application } from 'express';

import productsRouter from './routes/productsRoutes.ts';

export default (app: Application) => {
  app.use('/api', productsRouter);
};
