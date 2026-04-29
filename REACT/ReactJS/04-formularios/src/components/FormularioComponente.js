import React, { useState } from 'react';

export const FormularioComponente = () => {
  const [usuarioD, setUsuario] = useState({});

  const conseguirDatosForm = (e) => {
    /* evita que al hacer click en enviar blaquee la pagina */
    e.preventDefault();

    /* recuperamos datos(form) por medio de el o los eventos */
    let datos = e.target;

    const usuario = {
      /* capturamos datos por medio de el identificador de la etiqueta EJ: (name:"nombre").value */
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.biografia.value,
      enviar: datos.enviar.value,
    };

    /* el tipo debe ser igual al origen, const */
    /* destructuring Ej */
    // const { nombre, apellido, genero, biografia } = usuario;

    setUsuario(usuario);

    console.log(usuarioD);
  };

  const cambiarDatos = (e) => {
    /* se asigna el evento que atrapa el nombre de la etiqueta */
    let nameI = e.target.name;

    /* copiamos lo que tengamos en la variable de estado(objeto HTML) */
    // let usuarioModificar = usuarioD;

    /* asignamos */
    let value = e.target.value;

    /* al poner la variable usuarioModificar y en corchetes [nameI]
    se crea una variable dinamica la cual haria lo siguiente Ej: usuarioModificar(HTML Object).nombre
    al poner = value, se esta atrapando el valor del nombre de dicha etiqueta y lo asigna al objeto HTML*/
    // usuarioModificar[nameI] = value;

    /* call back(Recibe estado anterior) se le pasa a estado previo, usuarioD */
    setUsuario((estado_previo) => {
      /*los "..."(expande el objeto) garantiza trabajar con el trabajo previo osea lo que haya en usuarioD
       posterior a la ',' se esta sobrescribiendo dentro del objeto usuarioD
      la propiedad y el valor pasado por el evento */
      return { ...estado_previo, [nameI]: value };
    });
  };

  return (
    <div>
      {/* se condiciona que aparezcan los datos si enviar tiene informacion, mostrara el texto */}
      {usuarioD.enviar ? (
        <div className="Info_Usuario label label-gray">
          Nombre: {usuarioD.nombre}
          <br></br>
          Apeliido: {usuarioD.apellido}
          <br></br>
          Genero: {usuarioD.genero}
          <br></br>
          <p>Biografia: {usuarioD.biografia}</p>
        </div>
      ) : (
        ''
      )}

      <h1>Formularios con React</h1>
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="nombre" onChange={cambiarDatos} placeholder="Nombre"></input>
        <input type="text" name="apellido" onChange={cambiarDatos} placeholder="Apeliido"></input>
        <select name="genero">
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>
        <textarea name="biografia" onChange={cambiarDatos} placeholder="Biografia"></textarea>
        <input type="submit" value="Enviar" name="enviar"></input>
      </form>
    </div>
  );
};
