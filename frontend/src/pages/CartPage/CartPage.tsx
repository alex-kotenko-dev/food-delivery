import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import s from './CartPage.module.css';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, total } = useCartStore();

  if (items.length === 0) {
    return (
      <main className={s.page}>
        <div className={s.empty}>
          <div className={s.emptyIcon}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Add some delicious food first!</p>
          <Link to="/" className={s.browseBtn}>Browse restaurants</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={s.page}>
      <div className={s.header}>
        <h1>Your Cart</h1>
        <button className={s.clearBtn} onClick={clearCart}>Clear all</button>
      </div>

      <div className={s.list}>
        {items.map(({ product, quantity }) => (
          <div key={product._id} className={s.item}>
            <img src={product.imageUrl} alt={product.name} />
            <div className={s.info}>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)} each</p>
              <button className={s.removeBtn} onClick={() => removeItem(product._id)}>Remove</button>
            </div>
            <div className={s.qty}>
              <button className={s.qtyBtn} onClick={() => updateQuantity(product._id, quantity - 1)}>−</button>
              <span className={s.qtyNum}>{quantity}</span>
              <button className={s.qtyBtn} onClick={() => updateQuantity(product._id, quantity + 1)}>+</button>
            </div>
            <p className={s.itemPrice}>${(product.price * quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className={s.summary}>
        <div className={s.total}>
          <span>Total</span>
          <span>${total().toFixed(2)}</span>
        </div>
        <button className={s.orderBtn}>Place Order 🎉</button>
      </div>
    </main>
  );
}