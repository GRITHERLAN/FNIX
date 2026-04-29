import { useLayoutEffect, useState } from 'react';

export const useAjax = (url) => {
  const [estado, setEstado] = useState({
    datos: null,
    cargando: true,
  });

  const getUsuario = async () => {
    setEstado({
      ...estado,
      cargando: true,
    });

    const peticion = await fetch(url, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    const { data } = await peticion.json();

    setTimeout(() => {
      setEstado({
        datos: data,
        cargando: false,
      });
    }, 2000);
  };

  useLayoutEffect(() => {
    getUsuario();
  }, [url]);

  return {
    estado,
  };
};
