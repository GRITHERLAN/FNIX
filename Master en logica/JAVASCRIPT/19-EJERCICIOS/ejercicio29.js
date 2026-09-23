function misVocales(palabra) {
  const vocales = 'aeiouAEIOU';
  let count = 0;

  for (let letras of palabra) {
    console.log(letras);
    if (vocales.includes(letras)) {
      count++;
    }
  }

  return count;
}

console.log(misVocales('Nicolas'));
