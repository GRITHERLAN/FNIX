import React from 'react';
import { trabajos } from '../datos/Tabajos';
import { Link } from 'react-router';

export const Portafolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portafolio</h1>
      <div className="capsula">
        {trabajos.map((trabajo) => {
          return (
            <article className="tarjeta" key={trabajo.id}>
              <div className="mask">
                <img src={'img/' + trabajo.id + '.png'}></img>
              </div>
              <span>{trabajo.categoria}</span>
              <h2>{trabajo.nombre}</h2>
              <h3>{trabajo.tecnologias}</h3>
              <strong>
                <Link to={trabajo.url}>Proyecto</Link>
              </strong>
            </article>
          );
        })}
      </div>
    </div>
  );
};
