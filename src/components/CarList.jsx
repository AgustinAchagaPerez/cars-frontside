import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    api.get('/cars')
      .then(response => setCars(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Autos Disponibles</h2>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            <Link to={`/cars/${car._id}`}>{car.make} {car.model}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
