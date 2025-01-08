import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/ProductsSlice';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price,
      rating,
      image,
      vendorName,
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/products', newProduct);
      setLoading(false);
      dispatch(addProduct(response.data));
      setSuccessMessage('Product uploaded successfully!');
      setTitle('');
      setPrice('');
      setRating('');
      setImage('');
      setVendorName('');
    } catch (error) {
      setLoading(false);
      console.error('Failed to upload product:', error);
      alert('Failed to upload product. Please try again.');
    }
  };

  return (
    <div className='container mx-auto p-8'>
      <h2 className='text-3xl font-semibold text-center text-gray-800 mb-8'>Add New Product</h2>
      <form onSubmit={handleSubmit} className='bg-white p-6 rounded-lg shadow-md'>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-lg font-medium text-gray-700'>
            Product Title
          </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border border-gray-300 w-full p-4 rounded-lg mt-2'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='price' className='block text-lg font-medium text-gray-700'>
            Price
          </label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border border-gray-300 w-full p-4 rounded-lg mt-2'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-lg font-medium text-gray-700'>
            Rating
          </label>
          <textarea
            id='rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className='border border-gray-300 w-full p-4 rounded-lg mt-2'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='image' className='block text-lg font-medium text-gray-700'>
            Image URL
          </label>
          <input
            type='url'
            id='image'
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='border border-gray-300 w-full p-4 rounded-lg mt-2'
            required
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='sellerName' className='block text-lg font-medium text-gray-700'>
            Vendor Name
          </label>
          <input
            type='text'
            id='sellerName'
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className='border border-gray-300 w-full p-4 rounded-lg mt-2'
            required
          />
        </div>
        {successMessage && <div className='text-center text-green-600 font-medium mb-4'>{successMessage}</div>}
        <div className='flex justify-center'>
          <button
            type='submit'
            className={`bg-blue-500 text-white p-4 rounded-lg font-semibold transition-all transform hover:scale-105 focus:outline-none ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Add Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
