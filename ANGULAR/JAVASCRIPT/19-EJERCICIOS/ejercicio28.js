let i = 0;

let miarray = [];

do {
  let pregunta = parseInt(prompt('Ingresa 6 numeros'));

  miarray.push(pregunta);

  i++;
} while (i < 6);

document.write('ordenado <br>');

let ordenado = miarray.sort((a, b) => a - b);

console.log(ordenado);

document.write(miarray.sort((a, b) => a - b).join('<br>'));

document.write('<hr>');

document.write('invertido <br>');

let reversa = miarray.reverse();

console.log(reversa);

document.write(miarray.reverse().join('<br>'));

console.log(miarray.length);

let encuentra = parseInt(prompt('digita uno de los numero que ingreaste'));

let pre = miarray.findIndex((Ele) => Ele == encuentra);

console.log(pre + ' ' + miarray[pre]);
