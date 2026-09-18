import { Routes, Route } from 'react-router';
import './App.css'
import axios from 'axios';
import { Homepage } from './pages/home/Homepage'
import { useEffect, useState } from 'react';
import { Checkoutpage } from './pages/checkout/Checkoutpage'
import { Orders } from './pages/orders/Orderspage'

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
      <Route path="orders" element={<Orders cart={cart} />} />
    </Routes>
  )
}

export default App