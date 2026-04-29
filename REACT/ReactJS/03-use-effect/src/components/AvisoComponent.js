import React, { useEffect } from 'react';

export const AvisoComponent = () => {
  useEffect(() => {
    /* Se detecta cuando se monta el componente, ojo solo una vez ,[] */
    alert('el componente avisocomponent esta montado');

    /* Cuando se desmonta funcion de limpieza, lo ultimo que manda antes de desmontarse */
    return () => {
      alert('Componente Desmontado');
    };
  }, []);

  return (
    <div>
      <hr></hr>
      <h1>Saludos Nicolas</h1>
      <button onClick={() => alert('BIENVENIDO')}>Mostar alerta</button>
    </div>
  );
};
