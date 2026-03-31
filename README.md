# 🍔 FoodDash — Food Delivery App

A web application for ordering food delivery.


## 🔗 Live Demo

- Frontend: https://food-delivery-frontend-rouge-omega.vercel.app
- Backend: https://food-delivery-backend-rfyu.onrender.com

## 🛠 Tech Stack

**Frontend**
- React + TypeScript
- CSS Modules
- Zustand (cart state)
- Axios (API requests)
- React Router

**Backend**
- Node.js + Express + TypeScript
- MongoDB Atlas + Mongoose

## ✅ Features

- Browse restaurants with rating filter (2–3, 3–4, 4–5 stars)
- View products inside each restaurant
- Filter products by category (Burgers, Pizza, Drinks, Desserts, Salads)
- Sort products by price (low/high) and name (A→Z)
- Add products to cart, change quantity, remove items
- Cart persists after page refresh
- Responsive design (mobile, tablet, desktop)

## 🚀 Local Setup

**Requirements:** Node.js, MongoDB
```bash
# Clone the repo
git clone https://github.com/alex-kotenko-dev/food-delivery.git

# Backend
cd backend
npm install
cp .env.example .env      # add your MONGO_URI
npm run seed              # fill the database
npm run dev               # runs on http://localhost:5000

# Frontend (new terminal)
cd frontend
npm install
npm run dev               # runs on http://localhost:5173
```

## 📁 Project Structure
```
food-delivery/
├── backend/
│   ├── src/
│   │   ├── models/       # Shop, Product schemas
│   │   ├── routes/       # /api/shops, /api/products
│   │   ├── seed.ts       # test data
│   │   └── index.ts
└── frontend/
    ├── src/
    │   ├── components/   # Navbar, ShopCard, ProductCard, Filters
    │   ├── pages/        # ShopsPage, CartPage
    │   ├── store/        # Zustand cart store
    │   ├── api/          # axios client
    │   └── types/        # TypeScript interfaces
```