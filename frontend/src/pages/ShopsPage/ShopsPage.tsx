import { useState, useEffect } from 'react';
import { getShops, getProducts } from '../../api/index';
import type { Shop, Product } from '../../types/index';
import ShopCard from '../../components/ShopCard/ShopCard';
import ProductCard from '../../components/ProductCard/ProductCard';
import ShopFilters from '../../components/ShopFilters/ShopFilters';
import ProductFilters from '../../components/ProductFilters/ProductFilters';
import s from './ShopsPage.module.css';

export default function ShopsPage() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [minRating, setMinRating] = useState<number | undefined>();
  const [maxRating, setMaxRating] = useState<number | undefined>();
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getShops(minRating, maxRating)
      .then(r => setShops(r.data))
      .catch(() => setShops([]));
  }, [minRating, maxRating]);

  useEffect(() => {
    if (!selectedShop) return;
    setLoading(true);
    getProducts({ shopId: selectedShop._id, category, sort })
      .then(r => setProducts(r.data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [selectedShop, category, sort]);

  const handleRatingChange = (min?: number, max?: number) => {
    setMinRating(min);
    setMaxRating(max);
  };

  const handleShopClick = (shop: Shop) => {
    setSelectedShop(shop);
    setCategory('');
    setSort('');
  };

  return (
    <main className={s.page}>
      {!selectedShop ? (
        <>
          <h1 className={s.title}>Restaurants</h1>
          <ShopFilters minRating={minRating} onChange={handleRatingChange} />
          {shops.length === 0 ? (
            <p className={s.empty}>No restaurants found</p>
          ) : (
            <div className={s.grid}>
              {shops.map(shop => (
                <ShopCard key={shop._id} shop={shop} onClick={() => handleShopClick(shop)} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          <button
            className={s.backBtn} 
            onClick={() => setSelectedShop(null)}
          >
            ← Back to restaurants
          </button>
          <div className={s.shopHeader}>
            <img src={selectedShop.imageUrl} alt={selectedShop.name} />
            <div>
              <h2>{selectedShop.name}</h2>
              <span>⭐ {selectedShop.rating} · 🕐 {selectedShop.deliveryTime} min</span>
            </div>
          </div>
          <ProductFilters
            category={category}
            sort={sort}
            onCategoryChange={setCategory}
            onSortChange={setSort}
          />
          {loading ? (
            <div className={s.loading}>Loading...</div>
          ) : products.length === 0 ? (
            <p className={s.empty}>No products found</p>
          ) : (
            <div className={s.grid}>
              {products.map(p => <ProductCard key={p._id} product={p} />)}
            </div>
          )}
        </>
      )}
    </main>
  );
}