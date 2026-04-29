import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const Persona = () => {
  /* se trae el parametro e informacion en tipo objeto, se carga info por defecto, useParams es el hook para atrapar los
  parametros puestros en el path del route */
  //   let { nombre = 'Nicolas', apellido = 'Valencia' } = useParams();

  let { nombre, apellido } = useParams();

  /*   if (!nombre) {
    nombre = 'Nicolas';
  } else if (!apellido) {
    apellido = 'Valencia';
  } */
  /* hook navegar, se usa para ir a una ruta con mas interactividad */
  const navegar = useNavigate();

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = `/persona/${nombre}/${apellido}`;

    if (nombre.length === 0 && apellido.length === 0) {
      navegar('/persona');
    } else if (nombre === 'contacto') {
      navegar('/contacto');
    } else {
      navegar(url);
    }
  };

  return (
    <div>
      {!nombre ? (
        <h1>No existe ninguna persona</h1>
      ) : (
        <>
          <h1>
            Persona: {nombre} {apellido}
          </h1>
          <p>Esta pagina es Persona</p>
        </>
      )}

      <form onSubmit={enviar}>
        <input type="text" name="nombre"></input>
        <br></br>
        <input type="text" name="apellido"></input>
        <br></br>
        <input type="submit" name="enviar" value="enviar"></input>
      </form>
    </div>
  );
};
