import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetail from './components/CarDetail';
import Reservations from './pages/Reservations';
import CarForm from './components/CarForm';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/new" element={<CarForm />} />
      <Route path="/cars/:id" element={<CarDetail />} />
      <Route path="/cars/:id/edit" element={<CarForm />} />
      <Route path="/reservations" element={<Reservations />} />
    </Routes>
  </Router>
);

export default App;
