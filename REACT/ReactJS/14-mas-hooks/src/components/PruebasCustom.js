import React, { useState } from 'react';
import { useMayus } from '../Hooks/useMayus';

export const PruebasCustom = () => {
  const { estado, mayusculas, minusculas, concatenar } = useMayus('Nicolas Valencia');

  return (
    <div>
      <hr></hr>
      <h1>Probando componente personalizados</h1>
      <h2>{estado}</h2>
      <button onClick={mayusculas}>Poner en mayusculas</button>
      <button onClick={minusculas}>Poner en minusculas</button>
      <button onClick={(e) => concatenar('Probando hooks personalizados')}>concatenar</button>
    </div>
  );
};
