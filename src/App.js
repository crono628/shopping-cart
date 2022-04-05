import React from 'react';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import './styles.css';
import Welcome from './components/Welcome';
import Showroom from './components/Showroom';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/showroom" element={<Showroom />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
