import React from 'react';
import PropTypes from 'prop-types';

/* para evitar realizar Ej: {props.nombre} o {props.ficha.altura} 
se desestructura estos objetos pasados en el componente App.js
realizando el siguiente parametro "({})" esto hara que los objetos pasen a ser variables directas */
export const TercerComponente = ({ nombre = 12323, apellido = 'Valencia', ficha }) => {
  console.log();

  return (
    <div>
      <h1>Comunicacion entre Componentes</h1>
      <ul>
        {/* utilizacion de los objetos */}
        <li>{nombre}</li>
        <li>{apellido}</li>
        <li>{ficha.altura}</li>
        <li>{ficha.grupo}</li>
      </ul>
    </div>
  );
};

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string,
  ficha: PropTypes.shape({
    altura: PropTypes.number,
    grupo: PropTypes.string,
  }),
};
