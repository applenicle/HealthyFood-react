import React from 'react';
import { Footer } from './components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
