import React from 'react';
import { Link } from 'react-router';

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hola soy nicolas valencia, soy nuevo en programacion <strong>programar lo que necesites</strong>
      </h1>
      <h2>
        Te ayudare a programar lo que necesites <Link to="/contacto">contacta conmigo</Link>
      </h2>

      <section className="lasts-works">
        <h2 className='heading'> Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de Desarrollo web</p>

        <div className="works"></div>
      </section>
    </div>
  );
};
