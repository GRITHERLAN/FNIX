import React, { useCallback, useEffect, useState } from 'react';
import { Empleados } from './Empleados';

export const Gestion = () => {
  const [nombre, setNombre] = useState('');
  const [pagina, setPagina] = useState(1);

  const asignarGestor = (e) => {
    setNombre(e.target.value);
  };

  useEffect(() => {
    console.log('Vista de gestion actualizada');
  }, [nombre, pagina]);

  const mostrarMensaje = useCallback(() => {
    console.log('Hola que tal soy yo un msj');
  }, [pagina]);

  return (
    <div>
      <h1>Nombre del Gestor: {nombre}</h1>
      <input type="text" onChange={asignarGestor} placeholder="Introduce tu nombre"></input>
      <h2>Listado de Empleados</h2>
      <p>Los usuarios son administrados por {nombre} vienen de jsonplaceholder...</p>
      <button
        onClick={() => {
          setPagina(1);
        }}
      >
        PAGINA 1
      </button>
      <br></br>
      <button
        onClick={() => {
          setPagina(2);
        }}
      >
        PAGINA 2
      </button>
      <Empleados pagina={pagina} mensaje={mostrarMensaje}></Empleados>
    </div>
  );
};
