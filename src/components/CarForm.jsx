import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

const CarForm = () => {
  const [car, setCar] = useState({
    make: '',
    model: '',
    year: '',
    pricePerDay: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.get(`/cars/${id}`)
        .then(response => setCar(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      api.put(`/cars/${id}`, car)
        .then(() => navigate('/cars'))
        .catch(error => console.error(error));
    } else {
      api.post('/cars', car)
        .then(() => navigate('/cars'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div>
      <h2>{id ? 'Editar Auto' : 'Agregar Nuevo Auto'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Marca:
          <input
            type="text"
            name="make"
            value={car.make}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Modelo:
          <input
            type="text"
            name="model"
            value={car.model}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Año:
          <input
            type="number"
            name="year"
            value={car.year}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Precio por día:
          <input
            type="number"
            name="pricePerDay"
            value={car.pricePerDay}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">{id ? 'Actualizar' : 'Agregar'}</button>
      </form>
    </div>
  );
};

export default CarForm;
