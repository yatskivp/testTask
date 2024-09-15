import { Mongoose } from 'mongoose';

export type ConnectToDb = () => Promise<Mongoose>;

export type ProductsFilter = {
  category?: string;
  name?: { $regex: string; $options: string };
  id?: string;
};
