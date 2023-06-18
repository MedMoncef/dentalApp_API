import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  purchase_price: { type: Number, default: 0.000 },
  sales_price: { type: Number, default: 0.000 },
  image: { type: String, required: false },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
  sku: { type: Number, required: false },
  stock: { type: Number, required: false },
  reorder_point: { type: Number, required: false },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;