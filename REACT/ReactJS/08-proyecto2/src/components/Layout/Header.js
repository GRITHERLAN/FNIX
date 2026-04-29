import React from 'react';
import { NavLink } from 'react-router';
export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span>N</span>
        <h3>icolas Valencia</h3>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/inicio" className={({ isActive }) => (isActive ? 'ACTIVO' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/portafolio" className={({ isActive }) => (isActive ? 'ACTIVO' : '')}>
              portafolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/curriculum" className={({ isActive }) => (isActive ? 'ACTIVO' : '')}>
              curriculum
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'ACTIVO' : '')}>
              contacto
            </NavLink>
          </li>
          <li>
            <NavLink to="/servicios" className={({ isActive }) => (isActive ? 'ACTIVO' : '')}>
              servicios
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
