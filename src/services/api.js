import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // Cambia según la URL del backend
});

export default api;
