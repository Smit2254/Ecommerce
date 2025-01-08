import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/CartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto mt-12'>
      <h1 className='text-3xl font-semibold text-center mb-6 text-gray-800'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-xl text-center text-gray-500'>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className='flex justify-between items-center border-b py-4 hover:bg-gray-50 transition-colors'
            >
              <span className='text-lg text-gray-700'>{item.title}</span>
              <span className='text-lg text-gray-900'>${item.price.toFixed(2)}</span>
              <button
                onClick={() => handleRemove(item.id)}
                className='bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition-all'
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className='mt-6 flex justify-between items-center text-lg font-semibold'>
          <span>Total:</span>
          <span className='text-xl text-gray-900'>
            ${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
