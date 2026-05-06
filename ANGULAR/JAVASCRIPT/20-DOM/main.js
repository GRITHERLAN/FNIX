/* DOM (Document Object Model) */

/* getElementByID seleccionar elementos por ID */

let caja = document.getElementById('caja');

/* Modificar caracteristicas de un elemento seleccionado manualmente*/
caja.innerHTML = '<h2>Hola soy nicolas</h2>';

/* caja.style.background = 'lightblue';
caja.style.maxWidth = '50%';
caja.style.margin = '0 auto';
caja.style.padding = '35px';
caja.style.textAlign = 'center';
caja.style.fontFamily = 'Arial';
 */

// caja.classList.add('cajita');

caja.className = 'cajita cajaza cajon';

function CambiarColor(color, radio) {
  caja.style.background = color;
  caja.style.borderRadius = radio;
  return 'color cambiado';
}

/* getElementByClassName : selecciona multiples elementos con una clase */

/* let articulos = document.getElementsByClassName('article');
console.log(articulos);
for (let i = 0; i < articulos.length; i++) {
  articulos[i].classList.add('articuloBase');

  if (i === 0) {
    articulos[i].classList.add('articuloAmarillo');
  }

  if (i === articulos.length - 1) {
    articulos[i].classList.add('articuloNegro');

    articulos[i].innerHTML = '<h2>Hola soy nicolas</h2>';
  }
} */

/* getElementByTagName */
let etiquetasArticulo = document.getElementsByTagName('article');
etiquetasArticulo[1].style.background = 'green';
console.log(etiquetasArticulo);

/*  RECOMENDABLE : QuerySelector */
let seccionArticulos = document.querySelector('#articulos');
seccionArticulos.style.background = 'lightblue';
console.log(seccionArticulos);

let primerArticulo = document.querySelector('.article');
primerArticulo.style.borderRadius = '10%';

/* RECOMENDABLE: QuerySelectorALL */
let articulos = document.querySelectorAll('.article');
console.log(articulos);

articulos.forEach((art, i) => {
  art.classList.add('articuloBase');

  if (i === 0) {
    art.classList.add('articuloAmarillo');
  }

  if (i === articulos.length - 1) {
    art.classList.add('articuloNegro');

    art.innerHTML = '<h2>Hola soy nicolas</h2>';
  }
});

/* Modificaciones */

const tarjeta = document.querySelector('#tarjeta');

console.log(tarjeta.textContent);
