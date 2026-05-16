/* FETCH (ajax) */

/* Sacar datos asincronos de un backend */
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((respon) => respon.json())
  .then((data) => {
    mostrarUsuario(data);
  })
  .catch((error) => {
    console.log(error);
  });

function mostrarUsuario(user) {
  let lista = document.querySelector("#lista");

  user.forEach((element) => {
    lista.innerHTML += `<li> ${element.id}</li>`;
  });

  console.log(user);
}

/* guardar informacion */
const usuarioParaGuardar = {
  name: "Nicolas",
  job: "Desarrolador web",
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(usuarioParaGuardar),
})
  .then((respon) => respon.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/* sitaxis de promesas con async y await */

async function sacarUsuarios() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();

    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

sacarUsuarios();
