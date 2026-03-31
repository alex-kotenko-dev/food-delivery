import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import styles from './Navbar.module.css'

export default function Navbar() {
  const items = useCartStore(s => s.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          FoodDash
        </Link>
        <Link to="/cart" className={styles.cartBtn}>
          Cart
          {count > 0 && (
            <span className={styles.badge}>
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}