/* Funciones anonimas */

/* sin nombre */

const saludo = function (params) {
  console.log('Hola a todos ' + params);
};

saludo('Nicolas');

/* funciones que se ejecutan con otra funcion como parametro */

setTimeout(() => {
  console.log('soy una callback comun');
}, 4000);

/* funciones call back */

function restame(n1, n2, mostrar, multiplicarPorTres) {
  let resta = n1 - n2;

  mostrar(resta);

  multiplicarPorTres(resta);

  return resta;
}

let multiplo = function (resultado) {
  console.log(resultado * 3);
};

restame(
  20,
  5,
  function (resultado) {
    console.log(resultado);
  },
  multiplo,
);

/* ambito variables (scope) */

let ruta = 'victorroblesweb.es/ruta';

function mostrarRuta() {
  console.warn(ruta);

  let nombre = 'Nicolas';

  console.log(nombre);
}

mostrarRuta();

/* hoisting */

console.log(coche);

var coche = 'chevrolet';

let moto = 'yamaha';

console.log(moto);

/* Funciones flecha */

/* definir funcion */
let curso = () => {
  console.log('Master React');
};
curso();
/* utilizar en un callback */
setInterval(() => {
  console.log('real madrid');
}, 18000);
