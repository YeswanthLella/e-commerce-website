import { Routes, Route } from 'react-router';
import './App.css'
import axios from 'axios';
import { Homepage } from './pages/Homepage'
import { useEffect, useState } from 'react';
import { Checkoutpage } from './pages/Checkoutpage'
import { Orders } from './pages/Orderspage'
function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      });
  }, []);
  return (
    <Routes>
      <Route index element={<Homepage cart={cart} />} />
      <Route path="checkout" element={<Checkoutpage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
    </Routes>

  )
}

export default App
