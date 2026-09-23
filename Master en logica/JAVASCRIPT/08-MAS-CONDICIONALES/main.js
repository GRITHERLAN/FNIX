// Condicional SWITCH
let miDesayuno = 3;

switch (miDesayuno) {
  case 1:
    console.log('Has elegido tortitas');
    break;
  case 2:
    console.log('Has elegido huevos fritos');
    break;
  case 3:
    console.log('Has elegido colacao');
    break;
  default:
    console.log('Has elegido otro desayuno');

    break;
}

// Condicional Ternario
let nombre = 'juan alberto';
let edad = 17;

let mayorEdad = edad >= 18 ? 'mayor edad' : 'Menor edad';

console.log(mayorEdad);

// diferencia entre var y let (alcance y bloques)

if ('hola' == 'hola') {
  let curso = 'master en CSS3 avanzado';
}

console.log(curso);
