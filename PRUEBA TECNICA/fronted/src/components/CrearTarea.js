import React, { useState } from 'react';
import { Peticion } from '../helpers/Peticion';
import { Global } from '../helpers/Global';

export const CrearTarea = ({ tareas, conseguirTareas, setTareas }) => {
  const [form, setForm] = useState({});

  const llenar = (e) => {
    let dato = e.target.value;
    setForm(dato);
  };

  const guardarTarea = async (e) => {
    e.preventDefault();
    /* recoger datos form */
    let nuevoArticulo = {
      title: form,
    };
    /* guardar articulo en el backend */
    const { tarea } = await Peticion(Global.url + 'creart', 'POST', nuevoArticulo);
    setTareas(tarea.resultado);
  };

  return (
    <article className="tareas">
      <h1>Crear Tarea</h1>
      <hr></hr>
      <form className="formulario" onSubmit={guardarTarea}>
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" name="titulo" onChange={llenar} required></input>
        </div>
        <input type="submit" value="Guardar"></input>
      </form>
    </article>
  );
};
