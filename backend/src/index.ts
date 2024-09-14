import express from 'express';

import { connectToDb, SERVER_PORT } from './config.ts';
import productsApi from './products-api/app.ts';
import { errorsMiddleware, notFoundMiddleware } from './commonMiddlewares.ts';

const app = express();

connectToDb()
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error(err));

errorsMiddleware(app);

productsApi(app);

notFoundMiddleware(app);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
