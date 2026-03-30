import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Shop from './models/Shop';
import Product from './models/Product';

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI || '');
  console.log('Connected, seeding...');

  await Shop.deleteMany({});
  await Product.deleteMany({});

  const shops = await Shop.insertMany([
    { name: 'Burger House',  description: 'Best burgers in town',     imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400', rating: 4.8, deliveryTime: 25, deliveryFee: 2.5 },
    { name: 'Pizza Planet',  description: 'Authentic Italian pizza',  imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', rating: 4.3, deliveryTime: 35, deliveryFee: 3.0 },
    { name: 'Sweet Dreams',  description: 'Desserts and more',        imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400', rating: 3.7, deliveryTime: 20, deliveryFee: 1.5 },
    { name: 'Fresh Bowl',    description: 'Healthy salads and drinks',imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400', rating: 2.9, deliveryTime: 30, deliveryFee: 2.0 },
  ]);

  await Product.insertMany([
    { name: 'Classic Burger', description: 'Beef, cheese, lettuce',          price: 8.99,  imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400', category: 'Burgers',  shopId: shops[0]._id },
    { name: 'Double Smash',   description: 'Double patty, special sauce',    price: 12.99, imageUrl: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400', category: 'Burgers',  shopId: shops[0]._id },
    { name: 'Cola',           description: '500ml, ice cold',                price: 2.49,  imageUrl: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400', category: 'Drinks',   shopId: shops[0]._id },
    { name: 'Milkshake',      description: 'Vanilla, choc or strawberry',    price: 4.99,  imageUrl: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400', category: 'Drinks',   shopId: shops[0]._id },
    { name: 'Cheesecake',     description: 'NY style slice',                 price: 5.49,  imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400', category: 'Desserts', shopId: shops[0]._id },
    { name: 'Margherita',     description: 'Tomato, mozzarella, basil',      price: 10.99, imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400', category: 'Pizza',    shopId: shops[1]._id },
    { name: 'Pepperoni',      description: 'Loaded with pepperoni',          price: 13.49, imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400', category: 'Pizza',    shopId: shops[1]._id },
    { name: 'Lemonade',       description: 'Fresh squeezed',                 price: 3.49,  imageUrl: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400', category: 'Drinks',   shopId: shops[1]._id },
    { name: 'Tiramisu',       description: 'Classic Italian',                price: 6.99,  imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400', category: 'Desserts', shopId: shops[1]._id },
    { name: 'Chocolate Cake', description: 'Triple chocolate',               price: 7.49,  imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', category: 'Desserts', shopId: shops[2]._id },
    { name: 'Waffles',        description: 'With maple syrup',               price: 8.99,  imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400', category: 'Desserts', shopId: shops[2]._id },
    { name: 'Berry Smoothie', description: 'Mixed berries',                  price: 5.99,  imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400', category: 'Drinks',   shopId: shops[2]._id },
    { name: 'Caesar Salad',   description: 'Romaine, croutons, parmesan',   price: 9.49,  imageUrl: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400', category: 'Salads',   shopId: shops[3]._id },
    { name: 'Greek Salad',    description: 'Feta, olives, cucumber',        price: 8.99,  imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400', category: 'Salads',   shopId: shops[3]._id },
    { name: 'Green Tea',      description: 'Hot or iced',                   price: 2.99,  imageUrl: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', category: 'Drinks',   shopId: shops[3]._id },
  ]);

  console.log('✅ Database seeded successfully!');
  await mongoose.disconnect();
};

seed().catch(console.error);