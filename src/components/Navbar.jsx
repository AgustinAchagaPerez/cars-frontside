import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/cars">Autos</Link></li>
      <li><Link to="/reservations">Reservas</Link></li>
    </ul>
  </nav>
);

export default Navbar;
