import React, { useState } from 'react';
import { obtenerVentasPorFecha } from '../services/api';

function VentasPorFecha() {
  const [fecha, setFecha] = useState('');
  const [ventas, setVentas] = useState([]);

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleBuscarVentas = () => {
    obtenerVentasPorFecha(fecha)
      .then((data) => {
        setVentas(data);
      })
      .catch((error) => {
        console.error('Error al obtener las ventas por fecha:', error);
      });
  };

  return (
    <div>
      <h1>Ventas por Fecha</h1>
      <input type="date" value={fecha} onChange={handleFechaChange} />
      <button onClick={handleBuscarVentas}>Buscar</button>

      {ventas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.id}</td>
                <td>{venta.cliente}</td>
                <td>{venta.fecha}</td>
                <td>{venta.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron ventas.</p>
      )}
    </div>
  );
}

export default VentasPorFecha;
