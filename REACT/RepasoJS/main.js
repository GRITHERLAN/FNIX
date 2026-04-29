var nombre = 'nicolas';
var altura = 178;

var concatenacion = nombre + ' ' + altura;

var datos = document.getElementById('datos');
// datos.innerHTML = `
// <h1> Hola soy la caja de datos</h1>
// <h2> Hola soy la caja de datos ${nombre}</h2>
// <h3> Hola soy la caja de datos ${altura}</h3>`;

if (altura >= 178) {
  datos.innerHTML += `<h1>eres alto</h1>`; /* se le suma el dato en lugar de sobrescribirlo */
} else {
  datos.innerHTML += `<h1>eres bajo</h1>`;
}

// for (var i = 2000; i <= 2025; i++) {
//   datos.innerHTML += `<h1>estamos en el año : ${i} </h1>`;
// }

function muestraMiNombre(nombre, altura) {
  var datos = `
<h1> Hola soy la caja de datos</h1>
<h2> Hola soy la caja de datos ${nombre}</h2>
<h3> Hola soy la caja de datos ${altura}</h3>`;
  return datos;
}

function imprimir() {
  datos.innerHTML = muestraMiNombre(nombre, altura);
}

imprimir();

var nombres = ['nicolas', 'victor', 'antonio'];

document.writeln('<h1>listado de nombres</h1></br>');
// for (i = 0; i < nombres.length; i++) {
//   document.writeln(nombres[i] + '</br>');
// }

/* sirve para recorrer arreglos(callback) */
nombres.forEach((parame) => {
  document.writeln('<ul><li>' + parame + '</li></ul>');
});

/* objetos */
var coche = {
  modelo: 'mercedes',
  velocidad: '500KM',
  antiguedad: '2020',
  mostrarDatos() {
    console.log(this.modelo, this.velocidad, this.antiguedad);
  },
  propiedad: 'valor aleatorio',
};

document.writeln('<h1>' + coche.modelo + '</h1>');

coche.mostrarDatos();

/* Promesas, se crea la promesa(Promise), es una call back que recibe dos parametros (resuelto o rechazado)*/
var saludar = new Promise((resolve, reject) => {
/* ejemplo con set timeout(callback) */
  setTimeout(() => {
    let saludo = 'Hola como estas';
    /* realiza validacion, y se reemplaza por lo que queremos que se muestre su se resuelve o si se rechaza */
    if (saludo) {
      resolve(saludo);
    } else {
      reject('no existe saludo');
    }
  }, 2000);
});

/* se aplica esta estructura para mostrar el resultado o el error, then para mostrar si es exitoso y catch para mostrar el error(callbacks) */
saludar
  .then((resultado) => {
    alert(resultado);
  })
  .catch((error) => {
    alert(error);
  });
