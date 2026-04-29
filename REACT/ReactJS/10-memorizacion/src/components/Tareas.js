import React, { useMemo, useState } from 'react';

export const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [contador, setContador] = useState(230);

  const guardarTareas = (e) => {
    e.preventDefault();
    setTareas((tarea) => [...tarea, e.target.descripcion.value]);
  };

  const borrarTarea = (id) => {
    /* filtrar las tareas para borrar la que no quiero */
    let nuevas_tareas = tareas.filter((tarea, indice) => {
      return indice !== id;
    });

    /* hacer setTareas */
    setTareas(nuevas_tareas);
  };

  const sumarAlContador = () => {
    setContador(contador + 1);
  };

  const contadoresPasados = (acumulacion) => {
    for (let i = 0; i <= acumulacion; i++) {
      console.log('Ejecutando acumulacion de contadores del pasado...');
    }
    return `Contador manual de tareas: ${acumulacion}`;
  };

  const memoContadores = useMemo(() => {
    return contadoresPasados(contador);
  }, [contador]);

  return (
    <div className="tareas-container">
      <h1>Mis tareas</h1>
      <form onSubmit={guardarTareas}>
        <input type="text" name="descripcion" placeholder="describe la tarea"></input>
        <input type="submit" value="Guardar"></input>
      </form>

      <h3>
        {memoContadores} <br></br>
        <button onClick={sumarAlContador}>Sumar</button>
      </h3>

      <hr></hr>
      <h3>Lista de tareas</h3>
      <ul>
        {tareas.map((tareas, indice) => {
          return (
            <li key={indice}>
              {tareas} &nbsp; <button onClick={() => borrarTarea(indice)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
