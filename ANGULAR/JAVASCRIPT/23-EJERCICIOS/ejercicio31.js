let rojo = document.querySelector("#rojo");

let amarillo = document.querySelector("#amarillo");

let verde = document.querySelector("#verde");

let boton = document.querySelector("#botoncito");

boton.addEventListener("click", () => {

  if (rojo.classList.contains("rojo")) {
    
    rojo.classList.remove("rojo");

    amarillo.classList.add("amarillo");
  } else if (amarillo.classList.contains("amarillo")) {
    amarillo.classList.remove("amarillo");

    verde.classList.add("verde");
  } else {
    rojo.classList.add("rojo");

    verde.classList.remove("verde");
  }
});
