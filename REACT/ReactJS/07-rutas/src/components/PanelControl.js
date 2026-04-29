import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
/* cargar rutas a un componente dentro de un componente con rutas */
export const PanelControl = () => {
  return (
    <div>
      <h1>Panel de control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            {/* Navlink lo vuelve SPA  */}
            <NavLink to="iniciop" className={({ isActive }) => (isActive ? 'activado' : '')}>
              inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="crear-articulos" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Crear Articulos
            </NavLink>
          </li>
          <li>
            <NavLink to="gestion-usuarios" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Gestion Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to="acerca-de" className={({ isActive }) => (isActive ? 'activado' : '')}>
              Acerca De
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>{/* quiero cargar los componentes de las sub-rutas */}</div>
      {/* se debe usar este componente para que se sepa que las subrutas se cargaran aqui */}
      <Outlet></Outlet>
    </div>
  );
};
