export interface Shop {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  deliveryTime: number;
  deliveryFee: number;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Burgers' | 'Drinks' | 'Desserts' | 'Pizza' | 'Salads';
  shopId: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}