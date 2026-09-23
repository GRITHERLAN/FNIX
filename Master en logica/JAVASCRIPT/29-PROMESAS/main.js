/* PROMESA */

let miPormesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (resolve) {
      resolve("la Promesa se ha cumplido perfectamente");
    } else {
      reject("la proma no se ha cumplido");
    }
  }, 6500);
});

console.log(miPormesa);

miPormesa
  .then((resultado) => {
    alert(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

/* mezcla con api */

let miPromesa2 = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

miPromesa2
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

/* promesas encadenadas */
function servirPizza() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respuesta) => respuesta.json())
        .then((data) => resolve(data));
    }, 1000);
  });
}

function servirHamburguesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respuesta) => respuesta.json())
        .then((data) => resolve(data));
    }, 2000);
  });
}

function servirSolomillo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respuesta) => respuesta.json())
        .then((data) => resolve(data));
    }, 3000);
  });
}

/* servirPizza().then((resultado1) => {
  console.log(resultado1);
  return servirHamburguesa().then((resultado2) => {
    console.log(resultado2);
    return servirSolomillo().then((resultado3) => {
      console.log(resultado3);
    });
  });
}); */

/* Async y Await */

async function servirPlatos() {
  try {
    let resultado1 = await servirPizza();
    console.log(resultado1);
    let resultado2 = await servirHamburguesa();
    console.log(resultado2);
    let resultado3 = await servirSolomillo();
    console.log(resultado3);
  } catch (e) {
    console.log(e);
  }
}

servirPlatos();
