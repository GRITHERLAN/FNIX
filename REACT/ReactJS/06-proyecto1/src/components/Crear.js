import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({ setListado }) => {
  const tituloComponente = 'Añadir Pelicula';

  const [peliState, setPeliState] = useState({ titulo: '', descripcion: '' });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    /* evita el recarge de la pag */
    e.preventDefault();
    /* conseguir datos del formulario */
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    /* crear objeto de la pelicula a guardar */
    let peli = {
      /* identificador po medio de hora */
      id: new Date().getTime(),
      /* al hacer esta sitaxis el codigo da por entendido que es EJ: titulo: titulo */
      titulo,
      descripcion,
    };
    /* guardar estado para reflejar cambio en la interfaz de usuario */
    setPeliState(peli);
    /* actualizar estado */
    setListado((elementos) => {
      /* se agrega un nuevo elemento a un array ya existente */
      return [...elementos, peli];
    });
    /* guardar en el almacenamiento local, proviene del herlper*/
    GuardarEnStorage('pelis', peli);
  };

  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        {/* se valida que ambos campos existan, una especie de condicional basica */}
        <strong>{titulo && descripcion && 'Has creado la Pelicula:' + peliState.titulo}</strong>
        <form onSubmit={conseguirDatosForm}>
          <input id="titulo" name="titulo" type="text" placeholder="Titulo" />
          <textarea id="descripcion" name="descripcion" placeholder="Descripcion"></textarea>
          <input id="save" type="submit" value="Guardar" />
        </form>
      </div>
    </>
  );
};
