import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebasContext';

export const Inicio = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      <p>Nombre: {usuario.nombre}</p>
      {/* <p>Valor compartido : {compartida.titulo}</p> */}
    </div>
  );
};
