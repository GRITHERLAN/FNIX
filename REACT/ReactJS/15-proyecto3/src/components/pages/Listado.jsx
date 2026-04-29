import React from 'react';
import { Global } from '../../Helpers/Global';
import { Peticion } from '../../Helpers/Peticion';
import { Link } from 'react-router-dom';

export const Listado = ({ articulos, setArticulos }) => {
  const eliminar = async (id) => {
    let { datos } = await Peticion(Global.url + '/articulo/' + id, 'DELETE');
    if (datos.status === 'Articulo borrado') {
      let articulosActualizados = articulos.filter((articulo) => {
        articulo._id !== id;
      });
      setArticulos(articulosActualizados);
    }
    console.log(datos);
  };

  return articulos.map((article) => {
    return (
      <article key={article._id} className="articulo-item">
        <div className="mascara">
          <img src={Global.url + '/imagen/' + article.imagen}></img>
        </div>
        <div className="datos">
          <h3 className="title">{article.titulo}</h3>
          <p className="description">{article.contenido}</p>
          <Link to={'/editar/' + article._id} a className="edit">
            Editar
          </Link>
          <button
            className="delete"
            onClick={() => {
              eliminar(article._id);
            }}
          >
            Borrar
          </button>
        </div>
      </article>
    );
  });
};
