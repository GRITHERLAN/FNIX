import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../../Helpers/Peticion';
import { Global } from '../../Helpers/Global';
import { useParams } from 'react-router-dom';

export const Editar = () => {
  const [articulos, setArticulos] = useState([]);
  const { formulario, cambiado } = useForm({});
  const [resultado, setResultado] = useState(false);

  const params = useParams();

  useEffect(() => {
    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {
    const { datos } = await Peticion(Global.url + '/articulo/' + params.id, 'GET');
    if (datos.status === 'success') {
      setArticulos(datos.consulta);
    }
  };

  const editarArticulo = async (e) => {
    e.preventDefault();
    /* recoger datos form */
    let nuevoArticulo = formulario;
    console.log(nuevoArticulo);
    /* guardar articulo en el backend */
    const { datos } = await Peticion(Global.url + '/articulo/' + params.id, 'PUT', nuevoArticulo);
    console.log(datos);

    if (datos.status === 'success') {
      /* subir la imagen */
      const fileInput = document.querySelector('#file');
      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);
      const subida = await Peticion(Global.url + '/articuloimg/' + datos.consulta._id, 'PUT', formData, true);
      console.log(subida.datos);
      setArticulos(subida.datos);
      setResultado(true);
    }
  };
  return (
    <div className="jumbo">
      <h1>Editar articulo</h1>
      <p>Formulario para Editar un articulo : {articulos.titulo}</p>
      <strong>{resultado ? 'Articulo guardado con exito' : ''}</strong>
      {/* Formulario */}
      <form className="formulario" onSubmit={editarArticulo} method="POST">
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input type="text" onChange={cambiado} name="titulo" defaultValue={articulos.titulo}></input>
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" onChange={cambiado} name="contenido" defaultValue={articulos.contenido}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <div className="mascara">
            <img src={Global.url + '/imagen/' + articulos.imagen}></img>
          </div>
          <input type="file" name="file0" id="file"></input>
        </div>

        <input type="submit" value="Guardar" className="btn btn-success"></input>
      </form>
    </div>
  );
};
