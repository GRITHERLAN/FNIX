/* Objetos Literales */
/* Es una estructura de datos que agrupa propiedades y metodos, bajo un mismo nombre */
let pelicula = {
  titulo: "terminator",
  anio: "1984",
  genero: "Ciencia Ficcion",
  director: "James Cameron",
  prota: "Arnold",
  elenco: ["arnol", "linda hamilton", "resto"],
  detalles: {
    duracion: 120,
    pegi: 18,
  },
  descripcion: () => {
    return `${this.titulo} 
    es una peli de ${this.genero}
    , dirigida por ${this.director} 
    y lanzada en el año ${this.anio}`;
  },
  mostrarElenco: () => {
    pelicula.elenco.forEach((actores) => {
      console.log(actores);
    });
  },
};

console.log(pelicula.titulo);

console.log(pelicula["genero"]);

pelicula.director = "Jason Stan";

console.log(pelicula);

pelicula.secuela = "Terminator 2";

console.log(pelicula.descripcion());

pelicula.mostrarElenco();

console.log(pelicula.detalles.duracion);

delete pelicula.genero;

console.log(pelicula);

/* JSON */

let palaDePadel = {
  nombre: "MetalBone",
  marca: "Adidas",
  anio: 2022,
  peso: 347,
  forma: "Diamante",
  dureza: "media",
};

console.log(palaDePadel);

let palaDePadelJSON = JSON.stringify(palaDePadel);

console.log(palaDePadelJSON);

let convertir = JSON.parse(palaDePadelJSON);

console.log(convertir);

let caja = document.querySelector("#datos");

for (let clave in palaDePadel) {
  caja.innerHTML += `<p>${clave} : ${palaDePadel[clave]}</p>`;
}
