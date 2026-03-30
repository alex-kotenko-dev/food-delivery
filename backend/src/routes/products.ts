import { Router } from 'express';
import Product from '../models/Product';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { shopId, category, sort } = req.query;
    const filter: Record<string, unknown> = {};

    if (shopId)   filter.shopId = shopId;
    if (category) filter.category = category;

    let sortOption: Record<string, 1 | -1> = {};
    if (sort === 'price_asc')  sortOption = { price: 1 };
    if (sort === 'price_desc') sortOption = { price: -1 };
    if (sort === 'name_asc')   sortOption = { name: 1 };

    const products = await Product.find(filter).sort(sortOption);
    res.json(products);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;