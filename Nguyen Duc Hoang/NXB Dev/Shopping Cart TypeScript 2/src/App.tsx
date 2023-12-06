import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
