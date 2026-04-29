import React, { useState } from 'react';
import { useForm } from '../Hooks/useForm';

export const MiFormulario = () => {
  const { formulario, cambiado, enviado } = useForm({});

  return (
    <div>
      <h1>Formulario</h1>
      <p>Formulario para guardar un curso</p>
      <p>Curso guardado: {formulario.titulo}</p>
      <pre className="codigo">{JSON.stringify(formulario)}</pre>
      <form onSubmit={enviado} className="mi-formulario">
        <input type="text" onChange={cambiado} placeholder="Titulo del curso" name="titulo"></input>
        <input type="number" onChange={cambiado} placeholder="Año de publicacion" name="anio"></input>
        <textarea name="descripcion" onChange={cambiado} placeholder="Descripcion"></textarea>
        <input type="text" onChange={cambiado} placeholder="Autor" name="autor"></input>
        <input type="email" onChange={cambiado} placeholder="Email" name="email"></input>

        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};
