import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopsPage from './pages/ShopsPage/ShopsPage';
import CartPage from './pages/CartPage/CartPage';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}