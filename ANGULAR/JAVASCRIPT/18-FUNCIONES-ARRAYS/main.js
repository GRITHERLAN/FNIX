/* Crear arrays */

let vacio = new Array(4);

console.log(vacio);

let gadgets = ['pc', 'laptop', 'tablet', 'movil', 'smartwatch'];
console.log(gadgets);

console.log(gadgets.length);

/* añadir elementos */

gadgets.push('audifonos', 'ps5');

console.log(gadgets);

/* eliminar ultimo elemento */

gadgets.pop();

console.log(gadgets);

/* agregar elementos al principoio */

gadgets.unshift('ps4', 'psp');

console.log(gadgets);

/* eliminar el primer elemento */

gadgets.shift();

console.log(gadgets);

/* busqueda por indice */

let ind = gadgets.indexOf('laptop');

let ind2 = gadgets.indexOf('ps56');

console.log(ind);

console.log(ind2);

/* Busqueda para ver si existe elemento */

let existe = gadgets.includes('ps4');

console.log(existe);

/* filtrar arrays */

let dispofilter = gadgets.filter((dispositivos) => dispositivos.includes('a'));

console.log(dispofilter);

/* Reduce */

let reducir = gadgets.reduce((total, actual) => total + ', ' + actual);

console.log(reducir);

/* Ordenar */

gadgets.sort();

console.log(gadgets);

/* invertir orden */

gadgets.reverse();

console.log(gadgets);

/* Combinar Arrays */

let numeros = [1, 2, 3, 4];

let union = gadgets.concat(numeros);

console.log(union);

/* Convertir en cadena */

let etiquetas = gadgets.join(',');

console.log(etiquetas);

/* Copiar porcion del array */

let misgadgetsFavs = gadgets.slice(3, 5);

console.log(misgadgetsFavs);

/* Busqueda */

let buscar = gadgets.find((disp) => disp.length > 5);

console.log(buscar);

/* busca igual pero devuelve el indice */

let indice = gadgets.findIndex((dispo) => dispo.length > 5);

console.log(indice);

/* Some */

let letrasE = gadgets.some((dispos) => dispos.includes('e'));

console.log(letrasE);

/* Every */

let letrasA = gadgets.every((dispos) => dispos.includes('a'));

console.log(letrasA);

/* Aplanar */

let anios = [
  [1990, 2000, 2001, 2002, 2005],
  [2010, 2020, 2023, 2024],
  [2025, 2050, 2500, 2145, [2100, 2200, 2300, [4000, 9000, 2777]]],
];

let plana = anios.flat(3);

console.log(plana);

/* Copywithin */

let fechas = ['01-01-1991', '02-02-1992', '03-03-1993', '04-04-1994', '05-05-1995'];

fechas.copyWithin(0, 3);

console.log(fechas);

/* Convertir string a array */

let nombre = 'Nicolas';

let arrayString = Array.from(nombre);

console.log(arrayString);

/* Desestructuracion */

let [uno, dos, tres] = [1, 2, 3];

console.log(uno);

let [actor, ...restoActo] = ['robert de niro', 'daddy', 'robert', 'brad', 'pid'];

console.log(restoActo);

/* Expandir Arrays spread */

let array1 = [1, 2, 3];

let array2 = [4, 5, 6];

let arraysCom = [...array1, ...array2];

console.log(arraysCom);

/* Convertir array a String */

console.log(gadgets.toString());

/* de string a array */

let frase = 'Bienvenido al curso de javascript mas sencillo de entender';

let arrayFrase = frase.split(' ');

console.log(arrayFrase);

/* pasar a seo slug */

let slug = arrayFrase.join('-');

console.log(slug);
