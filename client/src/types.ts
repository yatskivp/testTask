export type Product = {
  name: string;
  description: string;
  category: string;
  price: number;
  amount: number;
  id: string;
};

export type Products = Product[];

export type ValidationError = {
  message: string;
  stack: string;
  status: number;
};
