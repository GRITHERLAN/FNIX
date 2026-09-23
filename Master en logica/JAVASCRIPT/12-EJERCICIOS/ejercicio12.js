alert('Bienvenido, vamos a averiguar que numero es mayor a cual');
do {
  let num1 = prompt('digite el primer numero:');

  let num2 = prompt('digite el segundo numero numero:');

  var conversion1 = parseInt(num1);

  var conversion2 = parseInt(num2);

} while (isNaN(conversion1) && isNaN(conversion2));

if (conversion1 > conversion2) {
  alert(`el siguiente numero es mayor: ${conversion1}`);
} else if (conversion1 == conversion2) {
  alert(`los numeros son iguales: ${conversion1} y ${conversion2}`);
} else {
  alert(`el siguiente numero es mayor: ${conversion2}`);
}
