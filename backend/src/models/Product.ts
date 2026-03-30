import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Burgers' | 'Drinks' | 'Desserts' | 'Pizza' | 'Salads';
  shopId: mongoose.Types.ObjectId;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, enum: ['Burgers', 'Drinks', 'Desserts', 'Pizza', 'Salads'], required: true },
  shopId: { type: Schema.Types.ObjectId, ref: 'Shop', required: true },
});

export default mongoose.model<IProduct>('Product', ProductSchema);