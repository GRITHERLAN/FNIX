/* metodo generico, Helper y se exporta */
export const GuardarEnStorage = (clave, elemento) => {
  /* conseguir los elementos en el localStorage los Busca, el getItem devuelve string todo se guarda en texto
    y parse convierte ese texto en un array */
  let elementos = JSON.parse(localStorage.getItem(clave));

  /* Comprobar si es un array */
  if (Array.isArray(elementos)) {
    /* Guardar en el array un elemento nuevo */
    elementos.push(elemento);
  } else {
    /* crear un array con la nueva peli */
    elementos = [elemento];
  }

  /* guardar en el almacenamiento local,
     se parametriza localStorage.setItem(lugar de guardado, lo que va a guardar) 
     con JSON.stringify(lo que va a guardar) para que quite el array y solo deje los obj , 
     setItem ingresa valor */
  localStorage.setItem(clave, JSON.stringify(elementos));
  /* Devolver Objeto guardado */
  return clave;
};
