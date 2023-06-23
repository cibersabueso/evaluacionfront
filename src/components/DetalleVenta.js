import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleVenta } from '../services/api';

function DetalleVenta() {
  const { id } = useParams();
  const [venta, setVenta] = useState(null);

  useEffect(() => {
    obtenerDetalleVenta(id)
      .then((data) => {
        setVenta(data);
      })
      .catch((error) => {
        console.error('Error al obtener el detalle de la venta:', error);
      });
  }, [id]);

  if (!venta) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Detalle de Venta</h1>
      <p>Cliente: {venta.cliente}</p>
      <p>Fecha: {venta.fecha}</p>
      <p>Total: {venta.total}</p>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {venta.productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.subtotal}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <label>Total: {venta.total}</label>
    </div>
  );
}

export default DetalleVenta;
