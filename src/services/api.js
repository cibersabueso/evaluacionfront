import axios from 'axios';

// Configura la URL base del backend
const API_URL = 'http://localhost:8000/api';

// Función para obtener las ventas por fecha
export function obtenerVentasPorFecha(fecha) {
  const endpoint = `${API_URL}/ventas?fecha=${fecha}`;
  return axios.get(endpoint)
    .then(response => response.data)
    .catch(error => {
      console.error('Error al obtener las ventas por fecha:', error);
      throw error;
    });
}

// Función para obtener el detalle de una venta por su ID
export function obtenerDetalleVenta(id) {
  const endpoint = `${API_URL}/ventas/${id}`;
  return axios.get(endpoint)
    .then(response => response.data)
    .catch(error => {
      console.error('Error al obtener el detalle de la venta:', error);
      throw error;
    });
}
