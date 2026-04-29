import { useState } from 'react';

export const useForm = (objetoInicial = {}) => {
  const [formulario, setFormulario] = useState(objetoInicial);

  const serializarFormulario = (formulario) => {
    const formData = new FormData(formulario);
    console.log(formulario);

    const objeto_completo = {};
    console.log(formData);

    for (let [name, value] of formData) {
      objeto_completo[name] = value;
    }
    console.log(objeto_completo);

    return objeto_completo;
  };

  const enviado = (e) => {
    e.preventDefault();
    let curso = serializarFormulario(e.target);
    setFormulario(curso);
    console.log(formulario);

    document.querySelector('.codigo').classList.add('enviado');
  };

  const cambiado = ({ target }) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return {
    formulario,
    enviado,
    cambiado,
  };
};
