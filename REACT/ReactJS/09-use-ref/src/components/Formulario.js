import React, { useRef } from 'react';

export const Formulario = () => {
  /* hook useRef, se usa para pasar valor como parametro directo */
  const nombre = useRef('');
  const apellido = useRef('');
  const email = useRef('');

  const mostrar = (e) => {
    e.preventDefault();
    console.log(nombre.current.value);
    console.log(apellido.current.value);
    console.log(email.current.value);
    /* mi caja */
    console.log(miCaja);
    /* haciendo esta sintaxis renombramos el parametro current(que esta en el object) */
    let { current: caja } = miCaja;
    caja.classList.add('fondoVerde');
    caja.innerHTML = 'Formulario Enviado';
  };

  const miCaja = useRef();

  return (
    <div>
      <h1>Formulario</h1>
      <div ref={miCaja} className="miCaja">
        <h2>Pruebas con useRef</h2>
      </div>
      <form onSubmit={mostrar}>
        {/* se usa el valor ref, para saber que dato llenara el input */}
        <input placeholder="Nombre" ref={nombre} type="text"></input>
        <br></br>
        <input placeholder="Apellido" ref={apellido} type="text"></input>
        <br></br>
        <input placeholder="Correo Electronico" ref={email} type="email"></input>
        <br></br>
        <input value="Enviar" type="submit"></input>
      </form>
      <button
        onClick={() => {
          nombre.current.select();
        }}
      >
        Empezar a rellenar form
      </button>
    </div>
  );
};
