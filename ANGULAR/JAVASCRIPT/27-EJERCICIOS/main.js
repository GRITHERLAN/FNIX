let guardarP = document.querySelector("#FormPelis");

//Obtener datos existentes
let pelisarr = JSON.parse(localStorage.getItem("PELICULAS")) || [];

guardarP.addEventListener("submit", () => {
  /* objeto fecha */
  let fecha = new Date();

  /* organizar fecha */
  let anio = fecha.getFullYear();
  let mes = fecha.getMonth() + 1;
  let dia = fecha.getDate();

  /* num random */
  const num = Math.floor(Math.random() * 100) + 1;

  let titulo = document.querySelector("#Nombre").value;

  let PeliObj = {
    titulo: titulo,
    fecha: `${anio}-0${mes}-0${dia}`,
    popularidad: num,
  };

  // Agregar nuevo
  pelisarr.push(PeliObj);

  // Guardar actualizado
  localStorage.setItem("PELICULAS", JSON.stringify(pelisarr));

  console.log(pelisarr);
});

/* lista */
let lista = document.querySelector("#pelisLista");

/* recorremos array y objeto*/
pelisarr.forEach((elemento, index) => {
  lista.innerHTML += `
    <li>
      Titulo: ${elemento.titulo} -> 
      Fecha Creacion: ${elemento.fecha} -> 
      Popularidad: ${elemento.popularidad}
      <button onclick="eliminararr(${index})">Eliminar</button>
    </li>
  `;
});

/* funcion con onclick */
function eliminararr(i) {
  /* validamos si esta vacio o lleno */
  let pelisarr = JSON.parse(localStorage.getItem("PELICULAS")) || [];

  /* se muta el arreglo */
  pelisarr = pelisarr.filter((_, index) => index !== i);

  /* se guarda el nuevo valor */
  localStorage.setItem("PELICULAS", JSON.stringify(pelisarr));

  /* se recarga la pag para simular actualizacion */
  location.reload();
}
