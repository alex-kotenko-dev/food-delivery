import type { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';
import styles from './ProductCard.module.css';


export default function ProductCard({ product }: { product: Product }) {
  const { addItem, items } = useCartStore();
  const cartItem = items.find(i => i.product._id === product._id);

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className={styles.body}>
        <span className={styles.category}>
          {product.category}
        </span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>
            ${product.price.toFixed(2)}
          </span>
          <button
            className={cartItem ? styles.inCart : styles.addBtn}    
            onClick={() => addItem(product)}>
            {cartItem ? `✓ In cart (${cartItem.quantity})` : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}