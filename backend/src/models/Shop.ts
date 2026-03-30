import mongoose, { Schema, Document } from "mongoose";

export interface IShop extends Document {
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  deliveryTime: number;
  deliveryFee: number;
}

const ShopSchema = new Schema<IShop>({
  name:         { type: String, required: true },
  description:  { type: String, required: true },
  imageUrl:     { type: String, required: true },
  rating:       { type: Number, required: true, min: 1, max: 5 },
  deliveryTime: { type: Number, required: true },
  deliveryFee:  { type: Number, required: true },
});

export default mongoose.model<IShop>('Shop', ShopSchema);