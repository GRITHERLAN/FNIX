import { useEffect, useState } from 'react';
import './App.css';
import { CrearTarea } from './components/CrearTarea';
import { Tareas } from './components/Tareas';
import { Peticion } from './helpers/Peticion';
import { Global } from './helpers/Global';
import { TareasCompletadas } from './components/TareasCompletadas';

function App() {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    conseguirTareas();
  }, []);

  const conseguirTareas = async () => {
    const { tarea } = await Peticion(Global.url + 'tareas', 'GET');
    setTareas(tarea.resultado);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo_App</h1>
        <hr></hr>
      </header>
      <article className="content">
        <Tareas tareas={tareas} conseguirTareas={conseguirTareas} setTareas={setTareas}></Tareas>
        <TareasCompletadas tareas={tareas} conseguirTareas={conseguirTareas} setTareas={setTareas}></TareasCompletadas>
        <CrearTarea tareas={tareas} conseguirTareas={conseguirTareas} setTareas={setTareas}></CrearTarea>
      </article>
    </div>
  );
}

export default App;
