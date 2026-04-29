import React from 'react';

export const EventosComponente = () => {
  const hasDadoClick = (e, nombre) => {
    console.log(e);
    console.log('Hola soy un evento de click');
    alert(nombre);
  };

  const DobleClick = (nombre) => {
    console.log('Hola soy un evento de doble click');
    alert(nombre);
  };

  const hasEntrado = (e, accion) => {
    console.log('Hastrado a la caja con el mouse ' + accion);
  };

  const hasSalido = (e, accion) => {
    console.log('Hastrado a la caja con el mouse ' + accion);
  };

  const focus = (e) => {
    console.log('estas dentro del input');
  };

  const focusOut = (e) => {
    console.log('estas Fuera del input');
  };

  return (
    <div>
      <h1>Eventos en REACT</h1>
      <p>
        {/* Ëvento Click */}
        <button onClick={(e) => hasDadoClick(e, 'Hola')}>Dame Click</button>
      </p>
      <p>
        {/* Evento Doble click */}
        <button onDoubleClick={(e) => DobleClick('Doble click')}>Dame Doble Click</button>
      </p>
      <div id="Caja" onMouseEnter={(e) => hasEntrado(e, 'Entrado')} onMouseLeave={(e) => hasSalido(e, 'Salido')}>
        {/* Evento entrar y salir Raton */}
        Pasa por encima
      </div>

      <p>
        <input type="text" onFocus={focus} onBlur={focusOut} placeholder="Introduce tu Nombre"></input>
      </p>
    </div>
  );
};
