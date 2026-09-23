// Operadores aritemticos
let numero1 = 12;
let numero2 = 44;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** 2;

console.log('suma:', suma);
console.log('resta:', resta);
console.log('multiplicacion:', multiplicacion);
console.log('division:', division);
console.log('resto:', resto);
console.log('potencia:', potencia);

// Asignacion
let numerito = 4;
numerito += 23;
numerito -= 2;
numerito *= 2;
numerito /= 2;
console.log(numerito);

// Comparacion
let numerazo = 20;

console.log(numerazo === 20);

console.log(numerazo !== 20);

console.log(numerazo >= 40);

console.log(numerazo <= 40);

// Logicos
let esMayorEdad = true;
let tieneEntrada = false;

console.log(esMayorEdad && tieneEntrada);
console.log(esMayorEdad || tieneEntrada);
console.log(esMayorEdad && !tieneEntrada);

// Cadena
let mensaje1 = 'Hola';
let mensaje2 = 'Que tal';
let mensajeTotal = mensaje1 + ' ' + mensaje2;
mensajeTotal += ' Soy Nicolas';
console.log(mensajeTotal);

// Incremento y Decremento

let cifra = 1200;

cifra++;
++cifra;
cifra--;
--cifra;
console.log(cifra++);