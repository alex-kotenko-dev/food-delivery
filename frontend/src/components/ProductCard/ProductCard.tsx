import type { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, items } = useCartStore();
  const cartItem = items.find(i => i.product._id === product._id);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="h-40 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold bg-orange-50 text-orange-500 px-2 py-0.5 rounded-full">
          {product.category}
        </span>
        <h3 className="font-bold text-base mt-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mt-0.5">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
          <button
            onClick={() => addItem(product)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              cartItem
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            {cartItem ? `✓ In cart (${cartItem.quantity})` : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}