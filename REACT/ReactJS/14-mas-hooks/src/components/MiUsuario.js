import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useAjax } from '../Hooks/useAjax';

export const MiUsuario = () => {
  const [url, setUrl] = useState('https://reqres.in/api/users/2');
  const { estado } = useAjax(url);

  const getId = (e) => {
    let id = parseInt(e.target.value);
    setUrl('https://reqres.in/api/users/' + id);
  };
  return (
    <div>
      <h1>Mi usuario: </h1>
      <p>Datos del usuario:</p>
      <p>{estado.cargando ? 'cargando....' : ''}</p>
      <p>
        {estado?.datos?.first_name} &nbsp;
        {estado?.datos?.last_name}
      </p>
      <input type="number" name="id" onChange={getId}></input>
    </div>
  );
};
