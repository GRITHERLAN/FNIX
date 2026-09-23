let num1 = parseInt(prompt('escriba el primer numero : '));

let num2 = parseInt(prompt('escriba el segundo numero : '));

for (num1; num1 <= num2; num1++) {
  if (num1 % 2 != 0) {
    console.log(num1);
  }
}
