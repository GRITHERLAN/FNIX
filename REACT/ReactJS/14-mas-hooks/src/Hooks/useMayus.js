import { useState } from 'react';

export const useMayus = (texto) => {
  const [mitexto, setMitexto] = useState(texto);

  const mayusculas = () => {
    setMitexto(texto.toUpperCase());
  };

  const minusculas = () => {
    setMitexto(texto.toLowerCase());
  };

  const concatenar = (add = '') => {
    setMitexto(texto + ' ' + add);
  };

  return {
    mayusculas,
    minusculas,
    concatenar,
    estado: mitexto,
  };
};
