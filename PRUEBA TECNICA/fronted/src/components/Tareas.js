import { Peticion } from '../helpers/Peticion';
import { Global } from '../helpers/Global';

export const Tareas = ({ tareas, conseguirTareas, setTareas }) => {
  const tareaCompletada = async (id, title) => {
    const datos = {
      id,
      title,
      completed: true,
    };
    const { tarea } = await Peticion(Global.url + 'editar/' + id, 'PUT', datos);
    setTareas(tarea.resultado);
  };
  return (
    <>
      <article className="tareas">
        <div>
          <h1>Tareas Pendientes</h1>
          <hr></hr>
          <ul>
            {tareas.map((pendientes) => {
              return pendientes.completed ? (
                ''
              ) : (
                <li key={pendientes.id}>
                  {pendientes.title}
                  <button onClick={() => tareaCompletada(pendientes.id, pendientes.title)}>OK</button>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </>
  );
};
