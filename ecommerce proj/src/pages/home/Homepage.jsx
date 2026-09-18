import axios from 'axios';
import { Header } from '../../Components/Header';
import { ProductGrid } from './ProductsGrid'
import './Homepage.css';
import { useEffect, useState } from 'react';
export function Homepage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data);
    }
    getHomeData();
  }, []);



  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
