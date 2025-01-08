import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className='border rounded-lg p-4'>
      <img src={product.image} alt={product.title} className='w-full h-48 object-cover' />
      <h2 className='font-bold text-lg mt-2'>{product.title}</h2>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p className='text-gray-600 italic'>Vendor: {product.vendorName || 'Unknown'}</p>
      <button onClick={handleAddToCart} className='bg-blue-500 text-white px-4 py-2 mt-2 rounded'>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
