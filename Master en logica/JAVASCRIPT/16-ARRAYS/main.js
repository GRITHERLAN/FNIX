/* Arrays,matrices, arreglos */

let nombre = 'Nicolas';

let nombres = ['Nicolas', 'Andres', 'Valencia', 'Blandon'];

console.log(nombres);

console.log(nombres.length);

let peliculas = new Array('Iron-Man', 'Bat-Man', 'Thor');

console.log(peliculas);

console.log(peliculas.length);

nombres[1] = 'Belicoso';

nombres.push('hola');

console.log(nombres);

/* practica */

let elemento = parseInt(prompt('Que usuario quieres?', 0));

if (elemento >= nombres.length) {
  alert('ese usuario no existe, busca otro');
} else {
  alert(`Bien el usuario selecciona es ${nombres[elemento]}`);
}
