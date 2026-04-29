import React, { useEffect, useState } from 'react';
import { Global } from '../../Helpers/Global';
import { Peticion } from '../../Helpers/Peticion';
import { Listado } from './Listado';

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState('true');

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const { datos } = await Peticion(Global.url + '/articulos', 'GET');
    if (datos.status === 'success') {
      setArticulos(datos.consulta);
      setCargando(false);
    }
  };

  return (
    <>
      {cargando ? (
        'cargando...'
      ) : articulos.length >= 1 ? (
        <Listado articulos={articulos} setArticulos={setArticulos}></Listado>
      ) : (
        <h1>No hay articulos</h1>
      )}
    </>
  );
};
