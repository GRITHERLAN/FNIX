/* se uso rafc comando rapido para crear componente */
import React from 'react';

export const SegundoComponente = () => {
  const libros = ['harry potter', 'juego de tronos', 'clean code'];
  //   const libros = [];
  return (
    <div className="segundo-componente">
      <h1>Libros</h1>
      {/* se usa una condicion ternaria, se mete entre parentecis los resultados, debido a que son muchas lineas de codigo y estas condiciones deben meterse en una sola linea
      si son muchas se deben meter entre parentesis */}
      {libros.length >= 1 ? (
        <ul>
          {/* se usa map para recorrer arrays por lo que tiene acceso a los indices y asi se entienen con la extension JSX */}
          {libros.map((libros, indice) => {
            /* se crea el parametro indice para asignar un identificador unico al elemento, de lo contrario haria error(consola) por no tener identificacion */
            return <li key={indice}>{libros}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </div>
  );
};
