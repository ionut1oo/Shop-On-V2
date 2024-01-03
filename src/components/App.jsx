import React from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import SignUp from './SignUp';
import ProductDetail from './ProductDetails';
import Cart from './Cart';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path='/products/:productId' element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route />
      </Routes>

    </div>
  );
}

export default App;
