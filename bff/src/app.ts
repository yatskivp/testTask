import express from 'express';
import cors from 'cors';

import { BFF_PORT } from './config.ts';
import { errorsMiddleware, notFoundMiddleware } from './commonMiddlewares.ts';
import router from './routes/productsApiRoutes.ts';

const app = express();

app.use(cors());

errorsMiddleware(app);

app.use('/', router);

notFoundMiddleware(app);

app.listen(BFF_PORT, () => {
  console.log(`Server is running on port ${BFF_PORT}`);
});
