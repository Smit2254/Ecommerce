import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductsSlice';
import authReducer from './authSlice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
