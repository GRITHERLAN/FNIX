import React, { useState } from 'react';

export const PrimerComponente = () => {
  let web = 'Facebook';
  let cursos = [1, 2, 3, 4, 5];
  const [nombre, setNombre] = useState('Nicolas valencia');

  const Cambiar = (nombre) => {
    setNombre(nombre);
  };
  return (
    <div>
      <h1>Hola primer componente</h1>
      <p>mi nombre es: {nombre}</p>
      <p>mi web es: {web}</p>
      <button onClick={() => Cambiar('Nicolas andres valencia')}>Cambiar nombre</button>
      <br></br>
      <input type="text" onChange={(e) => Cambiar(e.target.value)} placeholder="Cambiar nombre"></input>
      <br></br>
      <button
        onClick={(e) => {
          console.log(nombre);
        }}
      >
        Consola
      </button>
      <ul>
        {cursos.map((curso, i) => {
          return <li key={i}>{curso}</li>;
        })}
      </ul>
    </div>
  );
};
