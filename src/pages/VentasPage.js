import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { obtenerVentasPorFecha } from '../services/api';

function VentasPage() {
  const history = useHistory();
  const [fecha, setFecha] = useState('');

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleBuscarVentas = () => {
    obtenerVentasPorFecha(fecha)
      .then((ventas) => {
        // Aquí puedes procesar y mostrar las ventas encontradas
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDetalleVenta = (id) => {
    history.push(`/venta/${id}`);
  };

  return (
    <div>
      <h1>Ventas por Fecha</h1>
      <input type="date" value={fecha} onChange={handleFechaChange} />
      <button onClick={handleBuscarVentas}>Buscar</button>

      {/* Renderizar las ventas encontradas en una lista o tabla */}
    </div>
  );
}

export default VentasPage;
