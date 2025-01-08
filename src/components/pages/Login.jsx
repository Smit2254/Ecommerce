import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../../store/authSlice';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3001/users', {
        params: { email, password },
      });
      const user = response.data[0];
      if (user) {
        dispatch(setLoggedInUser(user));

        if (user.role === 'vendor') {
          navigate('/');
        } else {
          navigate('/');
        }
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600'>
      <form onSubmit={handleLogin} className='max-w-md w-full bg-primary/40 p-8 rounded-xl shadow-2xl backdrop-blur-lg'>
        <h2 className='text-4xl font-bold text-center text-white mb-6'>Welcome Back</h2>
        <p className='text-center text-gray-200 mb-8'>Please log in to your account to continue.</p>
        <div className='mb-4'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-all'
            required
          />
        </div>
        <div className='mb-6'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-all'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full p-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transform hover:scale-105'
        >
          Login
        </button>
        <div className='flex justify-between items-center mt-4 text-sm text-gray-200'>
          <Link to='/forgot-password' className='hover:text-white'>
            Forgot password?
          </Link>
          <p>
            Don&apos;t have an account?{' '}
            <Link to='/register' className='text-blue-300 hover:text-white'>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
