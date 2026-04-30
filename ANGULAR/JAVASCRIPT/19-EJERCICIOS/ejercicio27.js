let personajes = ['V:frezer', 'H:Goku'];

let heroes = personajes.filter((personaje) => personaje.startsWith('H:'));
let villanos = personajes.filter((personaje) => personaje.startsWith('V:'));

console.log('heroes');

heroes.forEach((heroe) => {
  console.log(heroe.slice(2));
});

console.log('villanos');

villanos.forEach((villano) => {
  console.log(villano.slice(2));
});
