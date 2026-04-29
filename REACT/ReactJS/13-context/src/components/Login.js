import React, { useContext } from 'react';
import { PruebaContext } from '../context/PruebasContext';

export const Login = () => {
  const {setUsuario} = useContext(PruebaContext);

  const guardarDatos = (e) => {
    e.preventDefault();

    let usuario_Id = {
      username: e.target.username.value,
      nombre: e.target.nombre.value,
      web: e.target.web.value,
    };

    setUsuario(usuario_Id);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Pagina de Login</p>

      <form className="login" onSubmit={guardarDatos}>
        <input type="text" name="username" placeholder="Introduce nickname"></input>
        <input type="text" name="nombre" placeholder="Introduce nombre"></input>
        <input type="text" name="web" placeholder="Introduce web"></input>
        <input type="submit" value="enviar"></input>
      </form>
    </div>
  );
};
