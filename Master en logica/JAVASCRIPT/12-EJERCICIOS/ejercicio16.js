let numeroTabla = parseInt(prompt('escriba el numero de la tabla de multiplicar que desea saber:'));

let resultado = 'tu tabla solicitada : ';

for (let index = 1; index <= 10; index++) {
  resultado += `\n ${numeroTabla} * ${index} = ${numeroTabla * index}`;
}

alert(resultado);
