import { Router } from 'express';
import Shop from '../models/Shop';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const { minRating, maxRating } = req.query;
    const filter: Record<string, unknown> = {};

    if (minRating !== undefined || maxRating !== undefined) {
      const ratingFilter: Record<string, number> = {};
      if (minRating) ratingFilter.$gte = Number(minRating);
      if (maxRating) ratingFilter.$lte = Number(maxRating);
      filter.rating = ratingFilter;
    }

    const shops = await Shop.find(filter).sort({ rating: -1 });
    res.json(shops);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;