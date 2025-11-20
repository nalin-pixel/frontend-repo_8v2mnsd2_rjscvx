import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Order from './pages/Order';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<Category />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/order" element={<Order />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
