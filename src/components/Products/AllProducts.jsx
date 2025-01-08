import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AllProducts = () => {
  const cartItems = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <section className='container  px-6 py-12'>
        <div className='flex justify-between'>
          <h2 className='text-3xl font-semibold text-center mb-12 text-gray-800'>Featured Products:</h2>
          <Link to='/cart' className='relative text-2xl font-medium hover:text-blue-300 transition-all'>
            Cart 🛒
            <span className='absolute top-0 right-0 w-3 h-3 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
              {cartItems.length}
            </span>
          </Link>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'
            >
              <ProductCard product={product} />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-300 opacity-50 group-hover:opacity-30 transition-opacity pointer-events-none'></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
