let frameworks = ['Angular', 'React', 'Vue js', 'Astro', 'Node js', 'Svelte', 'Solid JS', 'Qwik', 'Express'];

/* Acceso manual */

console.log(frameworks[0]);

/* acceso automatico */
console.log('*************************************');

for (let i = 0; i < frameworks.length; i++) {
  console.log(frameworks[i]);
}

/* Mostrar por pantalla */

for (let i = 0; i < frameworks.length; i++) {
  document.write(`${frameworks[i]} <br>`);
}

/* Bucles para recorrer Arrays */

console.log('************************************* For normal');

let actores = ['brad pitt', 'Tobey maguire', 'Lenardo DiCaprio', 'Bruce Willis', 'Will Smith'];

console.log('Listados de Actores: ');

/* Bucle For */
for (let i = 0; i < actores.length; i++) {
  console.log(actores[i]);
}
console.log('************************************* For OF');

/* Bucle For OF */

for (let actor of actores) {
  console.log(actor);
}
console.log('************************************* For in');
/* Bucle For IN */

for (let act_in in actores) {
  console.log(actores[act_in]);
}

/* Bucle For Each */
console.log('************************************* For Each');
/* si queremos sacar el indice, solo se le agrega el segundo parametro */

actores.forEach((actorObj) => {
  console.log(actorObj);
});

/* Bucle Map */
console.log('************************************* Map');

let arrayNew = actores.map((actorObj) => {
  console.log(actorObj);

  return actorObj + ' Hollywood';
});

console.log(arrayNew);

/* Arrays multidimesionales */

console.log('*************************************');

let categorias = ['Lucha', 'Deportes', 'Accion', 'Sandbox', 'Carreras'];

let juegos = ['Teken', 'Fifa', 'Call of duty', 'GTA 6', 'NFS Unbound'];

let videojuegos = [categorias, juegos];

console.log(videojuegos[1][0]);

/* Arrays Bidimensionales */

let tabla = [
  ['Producto', 'Cantidad', 'Precio'],
  ['PC', 2, 350],
  ['Smartphone', 4, 127],
  ['Impresora', 10, 57],
];

console.log(tabla[2][0]);
console.table(tabla);

document.write('<table border = 1>');

tabla.forEach((fila, index) => {
  document.write('<tr>');

  fila.forEach((elemento) => {
    if (index == 0) {
      document.write('<th>' + elemento + '</th>');
    } else {
      document.write('<td>' + elemento + '</td>');
    }
  });

  document.write('</tr>');
});
document.write('</table>');

/* Arrays tridimensionales */
console.log('*************************************');
let carta = [
  ['Plato', 'Cantidad', 'Precio', 'Tamaño'],
  ['Menu pizza', 4, [8, 10, 15], ['pequeño', 'mediano', 'grante']],
  ['Menu burguer', 6, [10, 12, 17], ['pequeño', 'mediano', 'grante']],
  ['Menu paella', 1, [14, 18, 25], ['pequeño', 'mediano', 'grante']],
];

for (let menu of carta) {
  console.log('------------------');

  for (let elemento of menu) {

    if (Array.isArray(elemento)) {
      for (const subele of elemento) {
        console.log(subele);
      }

    } else {
      console.log(elemento);
    }
    
  }
}
