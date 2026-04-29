/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebasContext';

export const AppRouter = () => {
  const { usuario, setUsuario } = useContext(PruebaContext);

  return (
    <div>
      <BrowserRouter>
        {/* menu navegacion */}
        <header className="header">
          <nav>
            <div className="logo">
              <h2>Aprendiendo react context</h2>
            </div>
            <ul>
              <li>
                <NavLink to="/inicio">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/articulos">Articulos</NavLink>
              </li>
              <li>
                <NavLink to="/acerca-de">Acerca De</NavLink>
              </li>
              <li>
                <NavLink to="/contacto">Contacto</NavLink>
              </li>
              {usuario.hasOwnProperty('username') && usuario.username !== null ? (
                <>
                  <li>
                    <NavLink to="/">{usuario.username}</NavLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setUsuario({});
                      }}
                    >
                      Cerrar sesion
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Identificate</NavLink>
                </li>
              )}
            </ul>
          </nav>
        </header>

        <section className="content">
          {' '}
          {/* rutas */}
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/inicio" element={<Inicio></Inicio>}></Route>
            <Route path="/articulos" element={<Articulos></Articulos>}></Route>
            <Route path="/acerca-de" element={<Acerca></Acerca>}></Route>
            <Route path="/contacto" element={<Contacto></Contacto>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route
              path="*"
              element={
                <div>
                  <h1>Esta pagina con existe</h1>
                </div>
              }
            ></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
};
