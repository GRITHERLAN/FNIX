/* LocalStorage */

/* Comprobar disponibilidad */

if (typeof Storage != "undefined") {
  console.log("LocalStorage dispo");
} else {
  console.log("debes activar el localS");
}

/* Guardar Datos */

localStorage.setItem("Curso", "+100 proyectos de desarrollo web");

localStorage.setItem("enlace", "victorroblesweb.es");

/* Sacar Datos */

document.querySelector("#Curso").innerHTML = localStorage.getItem("Curso");
document.querySelector("#enlace").innerHTML = localStorage.getItem("enlace");

/* Guardar Objetos */

let animal = {
  especie: "elefante",
  nombre: "michi",
  color: "gris",
};

localStorage.setItem("animal", JSON.stringify(animal));

/* recuperar Objeto */

let animaljs = JSON.parse(localStorage.getItem("animal"));

console.log(animaljs);

/* Eliminar Datos */

localStorage.removeItem("animal");

/* vaciar datos */

(document.querySelector("#vaciar"),
  addEventListener("click", () => {
    localStorage.clear();
  }));
