import React, { useEffect, useReducer, useState } from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';
const init = () => {
  return JSON.parse(localStorage.getItem('juegos')) || [];
};
export const MisJuegos = () => {
  const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('juegos', JSON.stringify(juegos));
  }, [juegos]);

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let juego = {
      id: new Date().getTime(),
      titulo: e.target.titulo.value,
      descripcion: e.target.descripcion.value,
    };

    const accion = {
      type: 'Crear',
      payload: juego,
    };

    dispatch(accion);

    console.log(juegos);
  };

  const borrarG = (id) => {
    const accion = {
      type: 'borrar',
      payload: id,
    };

    dispatch(accion);
  };

  const editar = (e, id) => {
    console.log(id + ' ' + e.target.value);

    let juego = {
      id,
      titulo: e.target.value,
      descripcion: e.target.value,
    };

    const accion = {
      type: 'editar',
      payload: juego,
    };

    dispatch(accion);
  };

  return (
    <div>
      <h1>Estos son mis videojuegos</h1>
      <p>Numero de videojuegos: {juegos.length}</p>
      <ul>
        {juegos.map((games) => {
          return (
            <li key={games.id}>
              {games.titulo}
              <button onClick={(e) => borrarG(games.id)}>Borrar</button>
              <input onBlur={(e) => editar(e, games.id)} type="text"></input>
            </li>
          );
        })}
      </ul>

      <h3>Agregar juego</h3>

      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="Titulo"></input>
        <textarea name="descripcion" placeholder="Descripcion"></textarea>
        <input type="submit" value="Guardar"></input>
      </form>
    </div>
  );
};
