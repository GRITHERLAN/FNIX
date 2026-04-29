import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {
  /* metodo generico y estatico, con datos */
  /*   const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: 'michael.lawson@reqres.in',
        first_name: 'Nicolas',
        last_name: 'Valencia',
      },
      {
        id: 2,
        email: 'lindsay.ferguson@reqres.in',
        first_name: 'Andres',
        last_name: 'Blandon',
      },
      {
        id: 3,
        email: 'tobias.funke@reqres.in',
        first_name: 'Camilo',
        last_name: 'Ramirez',
      },
    ]);
  };
 */

  //   /* metodo con fetch */
  //   const getUsuariosAjaxPromesa = () => {
  //     /* recibimos api Ajax con fetch*/
  //     fetch('https://reqres.in/api/users', {
  //       /* ojo se debe realizar esre comando para consumir la Api de forma gratuta, de lo contrario no se podra
  //         acceder a ella */
  //       headers: {
  //         'x-api-key': 'reqres-free-v1',
  //       },
  //     })
  //       /* atrapamos la respuesta y la convertimos en formato JSON */
  //       .then((respuesta) => respuesta.json())
  //       /* ese formato JSON lo pasamos al parametro resultado_Final*/
  //       .then(
  //         (resultado_final) => {
  //           /* le pasamos a usuarios(Estado) lo que hay dentro de la propiedad data(todos los usuarios) */
  //           setUsuarios(resultado_final.data);
  //           console.log(resultado_final.data);
  //         },
  //         /* si hay error lo atrapamos en la misma then */
  //         (error) => {
  //           console.log('Error en la peticion' + error);
  //         },
  //       );
  //   };
  /* estados */

  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errores, setError] = useState('');

  /* async y await */
  const getUsuariosAjaxAW = () => {
    /* se le asigna async a la funcion anonima para que funcione el await */
    setTimeout(async () => {
      /* se captura un error con try y catch*/
      try {
        /* se realiza peticion, await hace que el código espere a que la respuesta de la API llegue antes de continuar */
        const peticion = await fetch('https://reqres.in/api/users', {
          /* ojo se debe realizar este comando para consumir la Api de forma gratuta, de lo contrario no se podra
        acceder a ella */
          headers: {
            'x-api-key': 'reqres-free-v1',
          },
        });
        /* desctructuring, las llaves {} dicen: “extrae las propiedades de este objeto con estos nombres y guárdalas en variables Ej data”. */
        /* en este caso lo sacamos directo del objeto  */
        const { data: datos } = await peticion.json();

        setUsuarios(datos);
        setCargando(false);
      } catch (error) {
        console.log('Hola hay un error ' + error.message);
        setError(error.message);
      }
    }, 3000);
  };

  /* se usa useEffect para cargar de forma automatica(sin necesidad de hacer un evento como un boton) los datos */
  useEffect(() => {
    getUsuariosAjaxAW();
  }, []);

  if (errores !== '') {
    /* cuando pasa un error */
    return <div className="error">{errores}</div>;
  } else if (cargando === true) {
    /* cuando esta todo cargando */
    return <div className="cargando">Cargando datos...</div>;
  } else if (cargando === false && errores === '') {
    /* cuando todo a ido bien */
    return (
      <div>
        <h2>Listado de Usuarios Via Ajax</h2>
        <ol className="usuarios">
          {/* se llenan datos de el metodo getUsuariosEstaticos() o getUsuariosAjaxPromesa() */}
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} width="40"></img>
                {usuario.first_name} {usuario.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
