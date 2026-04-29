import React, { useEffect, useRef, useState } from 'react';

export const Ejemplo = () => {
  const [numeroSaludo, setNumeroSaludo] = useState(0);
  const saludosCola = useRef();

  useEffect(() => {
    saludosCola.current = numeroSaludo;
    setTimeout(() => {
      console.log('mensajes en cola: ' + saludosCola.current);
    }, 2000);
  }, [numeroSaludo]);

  const enviarSaludo = (e) => {
    console.log('saludo enviado');
    setNumeroSaludo(numeroSaludo + 1);
  };
  return (
    <div>
      <hr></hr>
      <h1>Ejemplo con useRef</h1>
      <h2>Saludos enviados: {numeroSaludo}</h2>
      <button onClick={enviarSaludo}>Enviar saludo</button>
    </div>
  );
};
