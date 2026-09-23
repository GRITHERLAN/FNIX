/* Longitud */
let nombre = 'Nicolas';

console.log(nombre.length);

/* Conversion a texto */

let numero = 532;

console.log(typeof numero.toString());

/* convertir textos a mayusculas o minusculas */

let web = 'Facebook.com';

console.log(web.toUpperCase());

console.log(web.toLowerCase());

/* conseguir letra en concreto */

let frase = 'Batman';

console.log(frase.charAt(0));

/* comprobar si una cadena tiene dentro otra */

let slogan = 'no soy el mejor programador, pero si soy al que mejor entiendas';

if (slogan.includes('mejor')) {
  console.log('La frase existe');
} else {
  console.log('La frase no existe');
}

/* buscar la posicion de una palabra */

let mensaje = 'Estas aprendiendo javascript como un autentico LOCO';

console.log(mensaje.indexOf('aprendiendo'));

/* extraer parte de un texto */

let curso = 'master en javascript';

console.log(curso.slice(0, 6));

/* reemplazar parte de un texto, replace(solo una) o replaceAll(todos) */

let pelicula = 'Tontos muy Tontos';

console.log(pelicula.replaceAll('Tontos', 'Listos'));

/* trim o eliminar espacios en blanco */

let email = '       Nicolas';

console.log(email.trim());

/* Separar cadena por partes */

let lista = 'Huevos, Hamburguesas, Platanos, Lechuga, Tomate, Yogures';

let listaArr = lista.split(',');

console.log(listaArr);

/* extraer palabras despues de la posicion*/

let curso2 = 'Master React';

console.log(curso2.substring(6));

/* concatenar o unir cadenas de texto */

let ciudad = 'Murcia';
let pais = 'España';

console.log(''.concat('mi ciudad es ', ciudad, ' esta en ', pais));

/* Comienza por una palabra especifica */

let frase2 = 'Bienvenido a mi nuevo Curso';

console.log(frase2.startsWith('Bienvenido'));

/* acaba por una palabra especifica */

console.log(frase2.endsWith('Curso'));

/* Repetir palabras */

let msj = 'JS mola mucho';

console.log(msj.repeat(10));

/* Buscar texto en una cadena */
let miCadena = 'pablito clavo un clavito clavo';

console.log(miCadena.search(/clavo/g));

console.log(miCadena.match(/clavo/g));
