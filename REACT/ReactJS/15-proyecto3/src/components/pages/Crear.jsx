import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../../Helpers/Peticion';
import { Global } from '../../Helpers/Global';

export const Crear = () => {
  const { formulario, cambiado } = useForm({});
  const [resultado, setResultado] = useState(false);

  const guardarArticulo = async (e) => {
    e.preventDefault();
    /* recoger datos form */
    let nuevoArticulo = formulario;
    console.log(nuevoArticulo);
    /* guardar articulo en el backend */
    const { datos } = await Peticion(Global.url + '/crear', 'POST', nuevoArticulo);
    if (datos.status === 'success') {
      /* subir la imagen */
      const fileInput = document.querySelector('#file');
      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);
      const subida = await Peticion(Global.url + '/subir-imagen/' + datos.articulo._id, 'POST', formData, true);
      console.log(subida.datos);
      setResultado(true);
    }
  };
  return (
    <div className="jumbo">
      <h1>Crear articulo</h1>
      <p>Formulario para crear un articulo</p>
      <strong>{resultado ? 'Articulo guardado con exito' : ''}</strong>
      {/* Formulario */}
      <form className="formulario" onSubmit={guardarArticulo} method="POST">
        <div className="form-group">
          <label htmlFor="titulo">Titulo</label>
          <input type="text" onChange={cambiado} name="titulo"></input>
        </div>
        <div className="form-group">
          <label htmlFor="contenido">Contenido</label>
          <textarea type="text" onChange={cambiado} name="contenido"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file0">Imagen</label>
          <input type="file" name="file0" id="file"></input>
        </div>

        <input type="submit" value="Guardar" className="btn btn-success"></input>
      </form>
    </div>
  );
};
