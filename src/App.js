import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Website/pages/home/Home';
import Navbar from './Website/navbar/Navbar';
import "./App.css";

const App = () => (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </>
);

export default App;
