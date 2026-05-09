let boton = document.querySelector("#enviar");
let listaComrpas = [];
let lista = document.querySelector("#lista");

let i = 0;

let eliminar = document.querySelector("#eliminar");

boton.addEventListener("click", (e) => {
  e.preventDefault();

  let nombre = document.querySelector("#elemento").value;

  listaComrpas.push(nombre);

  console.log(listaComrpas);

  lista.innerHTML = "";

  listaComrpas.forEach((elemento, i) => {
    lista.innerHTML += `<li> ${elemento} <button id="eliminar" onclick="eliminararr(${i})" >eliminar</button> </li>`;
  });
});

function eliminararr(i) {
  listaComrpas.splice(i, 1);

  lista.innerHTML = "";

  listaComrpas.forEach((elemento, i) => {
    lista.innerHTML += `<li> ${elemento} <button id="eliminar" onclick="eliminararr(${i})" >eliminar</button> </li>`;
  });
}
