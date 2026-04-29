import React from 'react';

export const Editar = ({ peli, conseguirPeliculas, setEditar, setListado }) => {
  const titulo_componente = 'Editar pelicula';

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    /* conseguir el target del evento */
    let target = e.target;
    /* buscar el indice del objero de la peliculas almacenadas, traemos la informacion guardad en el localstorage */
    let pelis_almacenadas = conseguirPeliculas();
    /* permite buscar por una condicion dentro de un array de obj y devuelve el indice del array, Ej: 0, 1 , 2 */
    const indice = pelis_almacenadas.findIndex((peli_alm) => peli_alm.id === parseInt(id));

    /* crear objeto con ese indice, creamos nuevamente un objeto */
    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    /* actualizar elemento con ese indice, actualizando un array normal */
    pelis_almacenadas[indice] = peli_actualizada;

    /*guardar el nuevo array(objeto ➝ string JSON) de objetos en localstorage  */
    localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));
    console.log(pelis_almacenadas);

    /* Actualizar ESTADOS */
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input type="text" name="titulo" className="titulo_editado" defaultValue={peli.titulo}></input>
        <textarea name="descripcion" defaultValue={peli.descripcion}></textarea>
        <input type="submit" className="editar" value="Actualizar"></input>
      </form>
    </div>
  );
};
