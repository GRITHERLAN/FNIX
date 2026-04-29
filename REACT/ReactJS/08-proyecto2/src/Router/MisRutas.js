import React from 'react';
import { Routes, Route, BrowserRouter, NavLink, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';

export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION */}
      <Header></Header>
      {/* CONTENIDO CENTRAL */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio"></Navigate>}></Route>
          <Route path="*" element={<h1 className="heading">Error 404</h1>}></Route>
          <Route path="/inicio" element={<Inicio></Inicio>}></Route>
          <Route path="/portafolio" element={<Portafolio></Portafolio>}></Route>
          <Route path="/servicios" element={<Servicios></Servicios>}></Route>
          <Route path="/curriculum" element={<Curriculum></Curriculum>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        </Routes>
      </section>
      {/* FOOTER */}
      <Footer></Footer>
    </BrowserRouter>
  );
};
