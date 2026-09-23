let num = 0;
let resta = 0;
let contador = 0;

while (resta >= 0) {
  let numero = parseInt(prompt('ingrese cualquier numero :'));

  num += numero;

  resta = numero;

  contador++;
  if (resta < 0) {
    alert('es negativo se cancela la operacion');
  } else {
    alert(`la suma hasta ahora es de ${num} y su media es ${num / contador}`);
  }
}
