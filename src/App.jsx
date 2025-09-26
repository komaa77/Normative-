import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from "./pages/Signup";
import Login from './pages/Login';
import Wishlist from './pages/wishlist';
import Layout from './Layout/Layout';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/log" element={<Login />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
