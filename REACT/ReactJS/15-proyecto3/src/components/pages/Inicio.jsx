import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="jumbo">
      <h1>Bienvenido al Blog con react</h1>
      <p>Blog desarrolado con el MERN STACK (mongo,Express,React y Node JS)</p>
      <Link to="/articulos" className='button'>ver los Articulos</Link>
    </div>
  );
};
