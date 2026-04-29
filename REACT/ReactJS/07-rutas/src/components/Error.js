import React from 'react';
import { Link } from 'react-router-dom';

export const Error = () => {
  return (
    <>
      <h1>Error 404</h1>
      <strong>Esta pagina no Existe</strong>
      <br></br>
      {/* se usa Link por lo que es un enlace por fuera del router principal */}
      <Link to="/inicio">Volver a inicio</Link>
    </>
  );
};
