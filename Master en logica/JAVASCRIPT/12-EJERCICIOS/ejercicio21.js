let num = parseInt(prompt('ingrese el primer numero: '));

while (isNaN(num)) {
  num = parseInt(prompt('verifique que el primer numero sea valido :'));
}

let num2 = parseInt(prompt('ingrese el segundo numero: '));

while (isNaN(num2)) {
  num2 = parseInt(prompt('verifique que el segundo numero sea valido :'));
}

alert(`numero calculados en las 4 operaciones 
    \n Sumar : ${num + num2}
    \n restar : ${num - num2}
    \n multiplicar : ${num * num2}
    \n division : ${num / num2}`);
