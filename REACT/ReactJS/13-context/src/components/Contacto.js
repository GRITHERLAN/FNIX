import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebasContext';

export const Contacto = () => {
  const { usuario } = useContext(PruebaContext);
  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de Contacto</p>
      <p>{usuario.web}</p>
      {/* <p>Nombre: {datoDesdeElContexto.contenido}</p> */}
    </div>
  );
};
