import React from 'react';
import { Footer } from './components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Details from './pages/Details';

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
