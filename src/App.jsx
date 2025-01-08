import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import AdminPage from './components/pages/AdminPage';
import AllProducts from './components/Products/AllProducts';
import Cart from './components/Products/Cart';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Hero />
              <Products />
              <TopProducts />
              <Banner />
              <Subscribe />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route path='/login' element={<Login />} />

        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
