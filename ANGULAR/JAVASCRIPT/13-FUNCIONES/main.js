// Funciones

/* funcion: agrupa una serie de instrucciones para poder usarlas
varias veces */

function saludo(nombre = 'Andres', receta = 'Spagetti') {
  console.log(`Hola, ${nombre} y el ingrediente es : ${receta}`);

  return `Hola y receta correcta a ${nombre}`;
}

let msj = saludo('nicolas', 'lentejas');

for (let i = 0; i < 5; i++) {
  console.log(msj);
}

/* funciones dentro de otras */

function operaciones(num1, num2) {
  let resultado = {
    suma: num1 + num2,
    resta: num1 - num2,
    multiplicacion: num1 * num2,
    division: num1 / num2,
  };

  return resultado;
}

function porConsola(num1, num2) {
  let resultados = operaciones(num1, num2);

  console.log(`Suma ${resultados.suma}`);
  console.log(`Resta ${resultados.resta}`);
  console.log(`Multiplicacion ${resultados.multiplicacion}`);
  console.log(`Division ${resultados.division}`);

  return true;
}

function porPantalla(num1, num2) {
  let resultado = operaciones(num1, num2);

  document.write(`Suma ${resultado.suma} <br>`);
  document.write(`Resta ${resultado.resta} <br>`);
  document.write(`Multiplicacion ${resultado.multiplicacion} <br>`);
  document.write(`Division ${resultado.division} <br>`);

  return true;
}

function calculadora(num1, num2, mostrar = false) {
  if (mostrar == false) {
    porConsola(num1, num2);
  } else {
    porPantalla(num1, num2);
  }

  return true;
}

calculadora(5, 6, true);
calculadora(5, 6, false);

/* parametros REST (crea un objeto)*/

function misPeliculas(pelicula1, pelicula2, ...resto_de_pelis) {
  console.log(pelicula1);
  console.log(pelicula2);
  console.log(resto_de_pelis);

  for (let i = 0; i < resto_de_pelis.length; i++) {
    console.log(resto_de_pelis[i]);
  }
}

misPeliculas('Batman', 'Iron-Man', 'Terminator', 'Ant-Man', 'Jurassic park', 'Sin Limites', 'Tarde de perros');

/* Operador Spread */

let numeros = [1, 2, 3, 4, 5];

let misNumeros = [...numeros, 6, 7, 8, 9];

console.log(misNumeros);

let mispelisfavs = ['Batman 2', 'Iron-Man 2', 'Terminator 2'];

misPeliculas(...mispelisfavs);
