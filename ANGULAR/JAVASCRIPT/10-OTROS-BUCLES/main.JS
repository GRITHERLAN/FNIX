/* bucle while */

let year = 1990;
let objetivo = 2177;
let interferencia = 2117;

while (year <= objetivo) {
  console.log(year);
  if (year == interferencia) {
    break;
  }
  year++;
}

/* do while */

let numeros = 47;

do {
  console.log(numeros);
  numeros++;
} while (numeros <= 48);
