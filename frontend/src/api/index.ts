import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const getShops = (minRating?: number, maxRating?: number) =>
  api.get('/shops', { params: { minRating, maxRating } });

export const getProducts = (params: {
  shopId?: string;
  category?: string;
  sort?: string;
}) => api.get('/products', { params });