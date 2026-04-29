import React, { useEffect, useState } from 'react';
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListado }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    /* se usa .parse para que sea un objeto manejable o un array, en este caso mete los objetos en array, (string JSON ➝ objeto) */
    let peliculas = JSON.parse(localStorage.getItem('pelis'));

    setListado(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    /* Conseguir peliculas almacenadas, sacadas del localstorage */
    let pelis_almacenadas = conseguirPeliculas();
    /* filtrar de esas peliculas para que elimine el array la que no quiero, filter() filtra los elementos que cumplen con una condicion
    en este caso filtrara las peliculas que sean diferentes del id que se quiere eliminar */
    let nuevo_array_pelis = pelis_almacenadas.filter((peli) => peli.id !== parseInt(id));
    /* actualizar estado de listadostate */
    setListado(nuevo_array_pelis);
    /* actualizar datos del localstorage */
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
  };

  return (
    <>
      {/* se  condiciona(ternaria) para que pueda funcionar el programa de lo contrario saldra un error por lo que map recorrera un elemento vacio*/}
      {listadoState != null ? (
        /* se recorre cada objeto */
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
              {/* formulario de editar */}
              {editar === peli.id ? (
                <Editar key={peli.id} peli={peli} conseguirPeliculas={conseguirPeliculas} setEditar={setEditar} setListado={setListado}></Editar>
              ) : (
                ''
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay pelis para mostrar</h2>
      )}
    </>
  );
};
