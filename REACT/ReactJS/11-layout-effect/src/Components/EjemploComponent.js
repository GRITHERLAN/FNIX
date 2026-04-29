import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const EjemploComponent = () => {
  const [mostrar, setMostrar] = useState(false);

  const caja = useRef();
  const boton = useRef();

  useEffect(() => {
    console.log('UseEffect: componente cargado');
    if (caja.current == null) {
      return;
    }
    const { bottom } = boton.current.getBoundingClientRect();
    setTimeout(() => {
      caja.current.style.marginTop = `${bottom + 45}px`;
    }, 1000);

    console.log(bottom);
  }, [mostrar]);

  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <button
        ref={boton}
        onClick={() => {
          setMostrar((prev) => {
            console.log(!prev);
            return !prev;
          });
        }}
      >
        Mostrar MSJ
      </button>
      {mostrar ? (
        <div id="caja" ref={caja}>
          Hola soy un mensaje:{mostrar}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
