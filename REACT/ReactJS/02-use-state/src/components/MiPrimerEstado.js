import React, { useState } from 'react';

export const MiPrimerEstado = () => {
  /* problematica no funciona asi*/
  /*   let nombre = 'Nicolas Valencia';

  const cambiarNombre = () => {
    nombre = 'Andres Blandon';
  }; */

  /* el valor proporcionado en la funcion useState("") se le asigna al primer parametro
  dentro de los corchetes , EJ: nombre */
  const [nombre, setNombre] = useState('Nicolas Valencia');

  const cambiarNombre = (nombre) => {
    /* se debe usr el segundo parametro creado en la desestructuracion para realizar el cambio de la variable primaria(nombre) */
    setNombre(nombre);
  };

  return (
    <div>
      <h3>Componente: Mi primer Estado</h3>
      <strong className="label">{nombre}</strong>
      <br></br>
      {/* () => cambiarNombre('Andres') se realiza de esta manera porque el JSX renderiza todo de forma automatica
    por ende si se deja cambiarNombre('Andres'), lo ejecutaria instantaneamente sin necesidad del click
    mientras si ponemos la funcion anonima estara al tanto de que se ejecute el evento  */}
      <button onClick={() => cambiarNombre('Andres')}>Cambiar por Andres</button>
      <br></br>
      <input type="text" onChange={(e) => cambiarNombre(e.target.value)} placeholder="Cambiar nombre"></input>
    </div>
  );
};
