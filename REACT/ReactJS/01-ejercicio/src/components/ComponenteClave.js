import React, { useState } from 'react';

/* traemos el prop desde app.js */
export const ComponenteClave = ({ anio }) => {
  /* desestructuramos para usar el estado */
  const [anioCambio, setAnio] = useState(anio);

  /* funciones para realizar calculo */
  const adelantarAnio = () => {
    setAnio(anioCambio + 1);
  };

  const atrasarAnio = () => {
    setAnio(anioCambio - 1);
  };

  const cambiarAnioDinamico = (anioCambio) => {
    /* se utiliza Number, para que los valores que se ingrese en el input pasen de texto a numero enteros */
    setAnio(Number(anioCambio));
  };

  const restaurarAnio = () => {
    setAnio(anio);
  };

  return (
    <div>
      <h1>Año: {anioCambio}</h1>
      <hr></hr>
      <button className="boton" onClick={() => adelantarAnio()}>
        Adelantar Año
      </button>
      <hr></hr>
      <button className="boton" onClick={() => atrasarAnio()}>
        Atrasar Año
      </button>
      <hr></hr>
      <button className="boton" onClick={() => restaurarAnio()}>
        Restaurar Año
      </button>
      <hr></hr>
      <input
        className="cajatexto"
        type="number"
        onChange={(e) => cambiarAnioDinamico(e.target.value)}
        placeholder="Ingrese el año acambiar"
        required
      ></input>
    </div>
  );
};
