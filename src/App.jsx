import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Booking from './pages/Booking';
import RecipeDetail from './pages/RecipeDetail'; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<Booking />} />      
        <Route path="/recipe/:id" element={<RecipeDetail />} />    
      </Routes>
    </main>
    <Footer />
    <ToastContainer position="top-center" autoClose={3000} />
  </div>
);

export default App;
