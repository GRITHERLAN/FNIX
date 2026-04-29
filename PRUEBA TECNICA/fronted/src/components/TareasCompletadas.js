import React from 'react';

export const TareasCompletadas = ({ tareas, conseguirTareas, setTareas }) => {
  return (
    <article className="tareas">
      <div>
        <h1>Tareas Resueltas</h1>
        <hr></hr>
        <ul>
          {tareas.map((pendientes) => {
            return pendientes.completed ? (
              <li id="verde" key={pendientes.id}>
                {pendientes.title}
              </li>
            ) : (
              ''
            );
          })}
        </ul>
      </div>
    </article>
  );
};
