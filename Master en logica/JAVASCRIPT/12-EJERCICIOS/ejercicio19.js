let num1 = parseInt(prompt('mete tu numero y te digo los divisores : '));
let resultado = 'los divisores del numero ingresado son: ';
for (let i = 1; i <= num1; i++) {
  if (i % 2 == 0) {
    resultado += `\n ${i}`;
  }
}

alert(resultado);
