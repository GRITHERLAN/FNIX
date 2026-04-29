import React, { useEffect, useState } from 'react';

/* el uso de React.memo, hace que solo se renderize el componente cuando hay un cambio dentro de el
Ej: si en gestion hay un cambio, en Empleados no habra nada */
export const Empleados = React.memo(({ pagina, mensaje }) => {
  const [empleados, setEmpelados] = useState([]);

  /* la prop tambien se debe tener en cuenta para que actualice en parametro en el use effect, d elo cntrario solo mostrara el primer estado */
  useEffect(() => {
    conseguirUsers(pagina);
  }, [pagina]);

  const conseguirUsers = async (p) => {
    const url = 'https://reqres.in/api/users?page=' + p;
    const peticion = await fetch(url, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });
    const { data: empleados } = await peticion.json();
    setEmpelados(empleados);
  };

  useEffect(() => {
    console.log('se ha ejecutado la peticion ajax');
  }, [empleados]);

  mensaje();

  return (
    <div>
      <p>Mostrando la pagina : {pagina}</p>
      <ul className="empleados">
        {empleados.length >= 1
          ? empleados.map((empleados) => {
              return <li key={empleados.id}>{empleados.first_name + ' ' + empleados.last_name}</li>;
            })
          : ''}
      </ul>
    </div>
  );
});
