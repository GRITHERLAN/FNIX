// Condicional IF

// Si A es igual a B entonces haz algo

// Ejemplo 1:

let estaLLoviendo = true;

if (estaLLoviendo) {
  // se ejecuta esto
  console.log('Me llego mi paraguas para que no me moje');
} else {
  // si no se cumple
  console.log('No me llevo mi paraguas');
}

// Ejemplo 2:

let quieroCebolla = false;

if (quieroCebolla) {
  console.log('Te pondre cebolla en la hamburguesa');
} else {
  console.log('No te pondre cebolla en la hamburguesa');
}

// Ejemplo 3:

let nombre = 'Carlos ramirez';
let edad = 32;

if (edad >= 18) {
  console.log('Es mayor de edad');
  if (edad <= 20) {
    console.log('Es un adolecente');
  } else if (edad >= 70) {
    console.log('Es un anciano');
  } else {
    console.log('Es un adulto');
  }
} else {
  console.log('No es mayor de edad');
}

// Ejemplo 4:

let buenTiempo = false;

if (!buenTiempo) {
  console.log('NOS VAMOS AL PARQUE A PASEAR');
}

// Ejemplo 5:
let year = 2031;

if (year >= 2000 && year <= 2030) {
  console.log('Era actual');
} else if (year > 2030) {
  console.log('Era post-moderna');
} else {
  console.log('era antigua');
}

// Ejemplo 6

if (year == 2007 || year == 2017 || year == 2027) {
  console.log('si es igual');
} else {
  console.log('no es igual');
}
