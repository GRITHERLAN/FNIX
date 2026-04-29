import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/pages/Inicio';
import { Articulos } from '../components/pages/Articulos';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { Crear } from '../components/pages/Crear';
import { Busqueda } from '../components/pages/Busqueda';
import { Editar } from '../components/pages/Editar';

export const Rutas = () => {
  return (
    <BrowserRouter>
      {/* Layout */}
      <Header></Header>
      <Nav></Nav>
      {/* contenido central y rutas */}
      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/inicio" element={<Inicio></Inicio>}></Route>
          <Route path="/articulos" element={<Articulos></Articulos>}></Route>
          <Route path="/crear-articulos" element={<Crear></Crear>}></Route>
          <Route path="/buscar/:busqueda?" element={<Busqueda></Busqueda>}></Route>
          <Route path="/editar/:id?" element={<Editar></Editar>}></Route>
          <Route
            path="*"
            element={
              <div className="jumbo">
                <h1>ERROR 404</h1>
              </div>
            }
          ></Route>
        </Routes>
      </section>

      <Sidebar></Sidebar>
      <Footer></Footer>
    </BrowserRouter>
  );
};
