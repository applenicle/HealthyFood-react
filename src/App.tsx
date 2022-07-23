import React from 'react';
import { Footer } from './components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Details from './pages/Details';
import Favourite from './pages/Favourite';
import Profile from './pages/Profile';
import { useAppSelector } from './hooks/redux-hooks';

const App: React.FC = () => {
  const { mode } = useAppSelector((state) => state.UserReducer);

  return (
    <>
      <div className={mode ? 'container' : 'container-light'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/favourite" element={<Favourite />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
