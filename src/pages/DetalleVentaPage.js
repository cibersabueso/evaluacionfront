import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleVenta } from '../services/api';

function DetalleVentaPage() {
  const { id } = useParams();
  const [venta, setVenta] = useState(null);

  useEffect(() => {
    obtenerDetalleVenta(id)
      .then((venta) => {
        setVenta(venta);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      {venta ? (
        <div>
          <h1>Detalle de Venta</h1>
          <p>Cliente: {venta.cliente}</p>
          <p>Fecha: {venta.fecha}</p>
          <p>Total: {venta.total}</p>

          {/* Renderizar el detalle de los productos en una tabla */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default DetalleVentaPage;
