import React, { useEffect, useState } from 'react';
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState('Nicolas Valencia');
  const [fecha, setFecha] = useState('01-01-1998');
  const [contador, setContador] = useState(0);

  const modificarUsuario = (e) => {
    setUsuario(e.target.value);
    console.log('Ha habido un cambio en usuario');
  };

  const cambiarFecha = () => {
    setFecha(Date.now());
  };
  /* los use effect se ejecutan si necesidad de ser llamados como una funcion */
  /* solo se ejecuta una vez por poner los corchetes luego de la funcion , [] */
  useEffect(() => {
    console.log('Has cargado el componente PruebasComponet o has realizado un cambio en un estado');
  }, []);

  /* se ejecuta solo si cambio el usuario, agregando la propiedad que queramos*/
  useEffect(() => {
    console.log('Has modificado el usuario: ' + contador);
    setContador(contador + 1);
  }, [usuario, fecha]);

  return (
    <div>
      <h1>El efecto Use-Effect</h1>
      {/* operacion ternaria para evaluar contador y cambiar clase */}
      <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
      <strong>{fecha}</strong>
      <form>
        <input type="text" onChange={modificarUsuario} placeholder="Cambiar El Nombre"></input>
      </form>
      <p>
        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>
      {usuario === 'NICOLAS' ? <AvisoComponent></AvisoComponent> : ''}
    </div>
  );
};
