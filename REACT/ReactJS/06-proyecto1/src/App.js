import { useState } from 'react';
import { Buscador } from './components/Buscador';
import { Crear } from './components/Crear';
import { Listado } from './components/Listado';

function App() {
  /* se coloca en el componente padre para recargar las tarjetas automaticamente */
  const [listadoState, setListado] = useState([]);

  /* se importa lo que habia en el index del proyecto1-css documentado */
  return (
    <div className="layout">
      {/* cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mispeliculas</h1>
      </header>
      {/* barra de navegacion */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>
      {/* contenido principal */}
      <section className="content">
        {/* aqui va el listado de peliculas */}
        {/* se pasan las props para que se modifique el estado */}
        <Listado listadoState={listadoState} setListado={setListado}></Listado>
      </section>
      {/* barra lateral */}
      <aside className="lateral">
        {/* aqui ba el Buscador */}
        <Buscador listadoState={listadoState} setListado={setListado}></Buscador>
        {/* aqui va el creador */}
        {/* se pasa una sola prop que la funcion que tiene poder de modificar el estado */}
        <Crear setListado={setListado}></Crear>
      </aside>
      {/* pie de pagina */}
      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript - <a href="https://victorroblesweb.es">Victor Robles Web</a>
      </footer>
    </div>
  );
}

export default App;
