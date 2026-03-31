import type { Shop } from '../../types/index.ts';
import styles from './ShopCard.module.css';

interface Props {
  shop: Shop;
  onClick: () => void;
}

export default function ShopCard({ shop, onClick }: Props) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imgWrap}>
        <img
          src={shop.imageUrl}
          alt={shop.name}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.name}>{shop.name}</h3>
          <span className={styles.rating}>
            ⭐ {shop.rating}
          </span>
        </div>
        <p className={styles.desc}>{shop.description}</p>
        <div className={styles.meta}>
          <span>{shop.deliveryTime} min</span>
          <span>${shop.deliveryFee.toFixed(2)} delivery</span>
        </div>
      </div>
    </div>
  );
}