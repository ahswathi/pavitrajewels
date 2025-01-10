import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Website/pages/home/Home';
import Aboutus from './Website/pages/aboutus/Aboutus';
import './App.css';
import Product from './Website/pages/product/Product';
import ProdDescription from './Website/pages/prodDescription/ProdDescription';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutus" element={<Aboutus />} />
    <Route path="/product" element={<Product />} />
    <Route path="/prodDescription" element={<ProdDescription />} />
  </Routes>
);

export default App;
