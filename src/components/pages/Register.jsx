import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, password, role };
      const response = await axios.post('http://localhost:3001/users', newUser);
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600'>
      <form
        onSubmit={handleRegister}
        className='max-w-md w-full bg-primary/40  p-8 rounded-xl shadow-2xl backdrop-blur-lg'
      >
        <h2 className='text-4xl font-bold text-center text-white mb-6'>Create Account</h2>
        <p className='text-center text-gray-200 mb-8'>Join us by creating your account below.</p>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-all'
            required
          />
        </div>
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
        <div className='mb-4'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-all'
            required
          />
        </div>
        <div className='mb-6'>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className='w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-all'
            required
          >
            <option value='user'>User</option>
            <option value='vendor'>Vendor</option>
          </select>
        </div>
        <button
          type='submit'
          className='w-full p-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50 transform hover:scale-105'
        >
          Register
        </button>
        <p className='text-center text-gray-200 mt-4'>
          Already have an account?{' '}
          <a href='/login' className='text-blue-300 hover:text-white'>
            Login here
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
