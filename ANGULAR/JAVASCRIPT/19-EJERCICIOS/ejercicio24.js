let numeros = [12, 56, 37, 78, 90, 24, 6, 89, 94, 100];

let pregunta = parseInt(prompt('Digita un numero y si adivinas el correcto del 1 al 100, te llevas un carro ultimo modelo: '));

let adivino = numeros.includes(pregunta);

if (adivino) {
  alert('Logrado te llevas el auto');
} else {
  alert('no lo Lograste, sigue intentando');
}
