import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

export default function Navbar() {
  const items = useCartStore(s => s.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav>
      <div>
        <Link to="/">
          FoodDash
        </Link>
        <Link to="/cart">
          Cart
          {count > 0 && (
            <span>
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}