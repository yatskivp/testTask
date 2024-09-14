import { Application, Response, Request, NextFunction } from 'express';

type ValidationError = { message: string; stack: string; status: number };

export const errorsMiddleware = (app: Application) => {
  app.use(
    (
      err: ValidationError,
      _req: Request,
      res: Response,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _next: NextFunction,
    ) => {
      console.error(err.stack); // Log the error for debugging
      res.status(err.status || 500).json({
        error: {
          message: err.message || 'Internal Server Error',
        },
      });
    },
  );
};

export const notFoundMiddleware = (app: Application) => {
  app.use((req: Request, res: Response) => {
    res.status(404).json({ message: `${req.path} is not founded` });
  });
};
