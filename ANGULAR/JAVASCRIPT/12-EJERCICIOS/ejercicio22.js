let caramelos = 37;

let comerCaramelos = parseInt(prompt('cuantos caramelos te comiste'));

let bandera = 0;

while (caramelos > 0) {
  caramelos -= comerCaramelos;
  alert(`quedan ${caramelos} caramelos`);
  if (caramelos > 0) {
    comerCaramelos = parseInt(prompt('cuantos caramelos te comiste'));
  }
}
