/* Eventos */

/* Eventos de Raton */

/* Click */

let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", (e) => {
  alert("haz dado click al botoncito");
  console.log(e);
});

/* DOBLE CLICK */

let dobleClick = document.querySelector("#BotonDoble");

dobleClick.addEventListener("dblclick", () => {
  alert("haz dado dos clicks");
});

/* Mouse Over */

let mouse = document.querySelector("#mouse");

mouse.addEventListener("mouseover", () => {
  console.log("haz pasado por encima de la textarea");
});

/* Mouse Out */

mouse.addEventListener("mouseout", () => {
  console.log("haz salido de la caja de texto");
});

/* mouse Move */

mouse.addEventListener("mousemove", () => {
  console.log("te estas moviendo dentro de la caja");
});

/* eventos teclado */

let campotexto = document.querySelector("#campotexto");

campotexto.addEventListener("keydown", (e) => {
  console.log("haz presionado la tecla:" + e.key);
});

campotexto.addEventListener("keyup", (e) => {
  console.log("haz soltado la tecla:" + e.key);
});

campotexto.addEventListener("keypress", (e) => {
  console.log("haz mantenido presionando la tecla:" + e.key);
});

/* EVENTOS DE FORM */

let superForm = document.querySelector("#superForm");

superForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.querySelector("#nombre").value;
  let correo = document.querySelector("#correo").value;
  let genero = document.querySelector("#genero").value;

  alert(nombre);
  alert(correo);
  alert(genero);
});

let inputNombre = document.querySelector("#nombre");

inputNombre.addEventListener("input", (e) => {
  console.log("El usuario a escrito", inputNombre.value);
});

let selectGenero = document.querySelector("#genero");

selectGenero.addEventListener("change", () => {
  console.log("cambiaste de genero a:" + selectGenero.value);
});

let correo = document.querySelector("#correo");

correo.addEventListener("focus", () => {
  console.log("estas dentro del input");
  correo.style.background = "Lightblue";
});

correo.addEventListener("blur", () => {
  console.log("estas fuera del input");
  correo.style.background = "red";
});

/* Eventos del DOM y la ventana */

document.addEventListener("DOMContentLoaded", () => {
  console.log("me cargaste despues bro");
});

window.addEventListener("load", () => {
  console.log("me cargaste despues de cargar la pag");
});

window.addEventListener("resize", () => {
  console.log("cambiaste el tamaño" + window.innerHeight + " " + innerWidth);
});

window.addEventListener("scroll", () => {
  console.log("estas en:" + window.scrollY);
});

/* EVENTOS DEL PORTAPAPELES */

let portapeles = document.querySelector("#portapapeles");

portapeles.addEventListener("copy", () => {
  alert("ey estas copiando, no lo hagas");

  navigator.clipboard.writeText("");
});

portapeles.addEventListener("paste", () => {
  alert("has pegado un texto");
});

portapeles.addEventListener("cut", () => {
  alert("has pegado un has cortado el texto");
});

portapeles.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  alert("sacaste el menu contextual");
});

/* dejar de escuchar eventos */

let botoncito2 = document.querySelector("#botoncito2");

function alertita() {
  alert("Hola me diste click");
}

botoncito2.addEventListener("click", alertita);

setTimeout(() => {
  botoncito2.removeEventListener("click", alertita);
  alert("ya no puede usar el botoncito 2");
}, 10000);

/* Propagacion de Eventos */

let cajaPadre = document.querySelector("#cajaPadre");
let botonhijo = document.querySelector("#botonhijo");

cajaPadre.addEventListener("click", () => {
  alert("haz tocado el elemento padre");
});

botonhijo.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("haz tocado el elemento hijo");
});
