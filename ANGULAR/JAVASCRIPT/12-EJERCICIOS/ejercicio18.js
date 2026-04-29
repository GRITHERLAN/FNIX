let num1 = 1;
let num2 = 17;
let pregunta = parseInt(prompt('ingrese un numero del 1 al 17 si adivina el numero ganador, se lleva un carro: ', 0));
do {
  if (pregunta == 7) {
  } else {
    let msj = parseInt(prompt('upsss! numero incorrecto intente nuevamente', 0));
    pregunta = msj;
  }
} while (pregunta != 7);

alert('Felicidades haz ganado un auto nuevo 0 KM');
