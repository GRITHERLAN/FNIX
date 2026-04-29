/* importar modulos de React */
import React from 'react';
/* funcion del componente */
const MiComponente = () => {
  // let nombre = 'Nicolas';
  let apellido = 'Valencia';

  let usuario = {
    nombre: 'Nicolas',
    apellido: 'Valencia',
    cedula: 1007753357,
  };

  console.log(usuario);

  return (
    /* se utiliza esta etiqueta <>(fragment) sintaxis abreviada de <Fragment></Fragment>
    tambien se pueden usar <div className="mi-componente"></div> para renderizar el contenido, no se puede pasar varias etiquetas al return */
    <div className="mi-componente">
      {' '}
      <h2>Componente creado</h2>
      <h3>Datos del usuario:</h3>
      <ul>
        {/* {JSON.stringify(usuario)} se usa para imprimir objetos en pantalla */}
        <li>Nombre: {usuario.nombre}</li>
        {/* interpola las variables o propiedades de objetos */}
        <li>Apellido: {apellido}</li>
        <li>Apellido: {usuario.cedula}</li>
      </ul>
      <p>Este es mi componente</p>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
    </div>
  );
};
/* export */
export default MiComponente;
