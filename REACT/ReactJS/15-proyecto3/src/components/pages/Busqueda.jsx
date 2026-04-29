import React, { useEffect, useState } from 'react';
import { Global } from '../../Helpers/Global';
import { Peticion } from '../../Helpers/Peticion';
import { Listado } from './Listado';
import { useParams } from 'react-router-dom';

export const Busqueda = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState('true');
  const params = useParams();
  useEffect(() => {
    conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async () => {
    const { datos } = await Peticion(Global.url + '/buscar/' + params.busqueda, 'GET');
    if (datos.status === 'success') {
      setArticulos(datos.consulta);
      setCargando(false);
    } else {
      setArticulos([]);
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
