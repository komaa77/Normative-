import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from "./pages/Signup";
import Login from './pages/Login';
import Wishlist from './pages/wishlist';
import Cart from './pages/Cart';
import Layout from './layoutt/Layout';
import Checkout from './pages/checkout';
import Account from './pages/account';
import About from './pages/about';

const App = () => {
  return (
    <Router >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path="/sign" element={<SignUp />} />
          <Route path="/log" element={<Login />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/account' element={<Account/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
