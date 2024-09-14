import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  amount: Number,
  id: String,
});

export default mongoose.model('Products', productsSchema);
