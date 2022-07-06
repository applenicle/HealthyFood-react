import React from 'react';
import { Footer } from './components';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
