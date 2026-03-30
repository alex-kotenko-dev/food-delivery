import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import shopsRouter from './routes/shops';
import productsRouter from './routes/products';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/shops', shopsRouter);
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
  })
  .catch(err => console.error(' MongoDB error:', err));