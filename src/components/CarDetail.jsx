import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    api.get(`/cars/${id}`)
      .then(response => setCar(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!car) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <p>Año: {car.year}</p>
      <p>Precio por día: {car.pricePerDay}</p>
      <button>Reservar</button>
    </div>
  );
};

export default CarDetail;
