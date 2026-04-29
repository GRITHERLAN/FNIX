import React from 'react';
/* se debe realizar estos importa para usar las rutas, Nav link es para usar las rutas por medio de enlaces */
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Index } from '../components/Index';
import { Articles } from '../components/Articles';
import { Contact } from '../components/Contact';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelControl } from '../components/PanelControl';
import { Inicio } from '../components/panel/Inicio';
import { CrearArticulos } from '../components/panel/CrearArticulos';
import { GestionUsuarios } from '../components/panel/GestionUsuarios';
import { AcercaDe } from '../components/panel/AcercaDe';

export const RouterPrincipal = () => {
  return (
    /* se hace configuraciopn de rutas dentro de esta etiqueta, es la etiqueta padre */
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr></hr>
      <nav>
        <ul>
          <li>
            {/*  crea enlaces SPA */}
            {/* si se uso el link cumplira una condicion que le cambiar la clase, haciendo un return del resultado */}
            <NavLink to="/inicio" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/articulos" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Articulos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink to="/persona" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Persona
            </NavLink>
          </li>
          <li>
            <NavLink to="/panel" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Panel
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr></hr>
      <section className="contenido_principal">
        {/* se usa esta etiqueta para meter dentro las rutas que se usaran, ojo solo se cargaran o cambiara lo que este dentro del componente Routes
         lo que este por fuera se carga como si fuese una web estatica */}
        <Routes>
          {/* se establece cada una de las rutas, el path(establecer ruta correcta) es para establece el nombre de la url, y elemento es lo que abrira ese path */}
          <Route path="/" element={<Index></Index>}></Route>
          <Route path="/inicio" element={<Index></Index>}></Route>
          <Route path="/articulos" element={<Articles></Articles>}></Route>
          <Route path="/contacto" element={<Contact></Contact>}></Route>
          {/* la sitaxis de /:"parametro" es un campo que sera llenado de informacion mediante la url */}
          <Route path="/persona/:nombre/:apellido" element={<Persona></Persona>}></Route>
          <Route path="/persona/:nombre" element={<Persona></Persona>}></Route>
          <Route path="/persona" element={<Persona></Persona>}></Route>
          {/* '/*' se realiza cuando vamos a aasignar mas rutas dentro de la misma ruta */}
          <Route path="/panel/*" element={<PanelControl></PanelControl>}>
            <Route path="iniciop" element={<Inicio></Inicio>}></Route>
            <Route path="crear-articulos" element={<CrearArticulos></CrearArticulos>}></Route>
            <Route path="gestion-usuarios" element={<GestionUsuarios></GestionUsuarios>}></Route>
            <Route path="acerca-de" element={<AcercaDe></AcercaDe>}></Route>
          </Route>
          {/* se usa para redirigir a otra pagina, navigate */}
          <Route path="/redirigir" element={<Navigate to="/persona/nicolas/valencia"></Navigate>}></Route>
          {/* se usa el * para que muestre algo cuando alguna ruta no este definida */}
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </section>
      <hr></hr>
      <footer>Pie de pagina</footer>
    </BrowserRouter>
  );
};
