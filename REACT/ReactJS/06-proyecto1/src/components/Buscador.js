import React, { useState } from 'react';

export const Buscador = ({ listadoState, setListado }) => {
  const [busqueda, setBusqueda] = useState('');
  /* verificamos si la pelicula no existe, lo iniciamos en false */
  const [noEncontrado, setNoencontrado] = useState(false);

  const buscarPeli = (e) => {
    /* Crear estado y actualizarlo */
    setBusqueda(e.target.value);
    /* filtrar para buscar coincidencias*/
    let pelis_Encontradas = listadoState.filter((pelis_E) => {
      /* pasamos los titulos a minusculas, includes es para saber si la busqueda esta en el string de pelis_E */
      return pelis_E.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    /* Comprobar si hay un resultado, si es menor o igual a uno mantiene las pelis o si el valor ingresado no existe, mantiene las pelis en totalidad */
    if (busqueda.length <= 1 || pelis_Encontradas <= 0) {
      pelis_Encontradas = JSON.parse(localStorage.getItem('pelis'));
      setNoencontrado(true);
      /* si el input esta vacio o apenas hay una letra, actualiza el estado para mantenga o cargue todas las pelis */
      setListado(pelis_Encontradas);
    } else {
      setNoencontrado(false);
    }
    /* Actualizar el estado de listado principal con lo que he filtrado */
    setListado(pelis_Encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {/* evaluamos la condicion si noEncontrado es true, es porque no existen las pelis */}
      <span className="no_Encontrado">{noEncontrado && busqueda.length > 1 ? 'NO EXISTE' : ''}</span>
      <form>
        <input type="text" id="search_field" name="busqueda" autoComplete="off" onChange={buscarPeli}></input>
      </form>
    </div>
  );
};
