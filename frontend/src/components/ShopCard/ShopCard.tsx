import type { Shop } from '../../types/index.ts';

interface Props {
  shop: Shop;
  onClick: () => void;
}

export default function ShopCard({ shop, onClick }: Props) {
  return (
    <div onClick={onClick}>
      <div >
        <img
          src={shop.imageUrl}
          alt={shop.name}
        />
      </div>
      <div >
        <div >
          <h3>{shop.name}</h3>
          <span>
            ⭐ {shop.rating}
          </span>
        </div>
        <p>{shop.description}</p>
        <div>
          <span>{shop.deliveryTime} min</span>
          <span>${shop.deliveryFee.toFixed(2)} delivery</span>
        </div>
      </div>
    </div>
  );
}