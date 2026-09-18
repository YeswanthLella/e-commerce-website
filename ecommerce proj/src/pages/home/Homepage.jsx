import axios from 'axios';
import { Header } from '../../Components/Header';
import { ProductGrid } from './ProductsGrid'
import './Homepage.css';
import { useEffect, useState } from 'react';
export function Homepage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      });


  }, []);



  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
