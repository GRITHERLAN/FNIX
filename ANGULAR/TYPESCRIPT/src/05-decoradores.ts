// decorador basico
/* decoradores con parametros */

function DecoradorTurbo(target: Function) {
  console.log("El coche esta equipado con un turbo", target.name);
}

function DecoradorConMsj(msj: string) {
  /* debo crear una  function para poder pasarle el parametro target */
  return function (target: any) {
    console.log(`mi ${target.name} te manda este MSJ: ${msj}`);
  };
}

function AgregarMetodo(target: any) {
  /* se crea metodo  en el decorador de esta manera */
  target.prototype.acelerar = function () {
    console.log("Acelerando desde un metodo extra en un decorador " + target.name);
  };
}

/* lo valida para que typescript lo compile de forma correcta */
/* interface Coche {
  acelerar: () => void;
} */

// @DecoradorTurbo le pasa como parametro automatico la clase de abajo
// @DecoradorConMsj("El Mejor Curso de maquetacion WEB") se le pasa el primer parametro y automaticamente la clase
@AgregarMetodo
class Coche {
  constructor() {
    console.log("El coche esta arrancado!!!");
  }
}

/* lo valida para que typescript lo compile de forma correcta, manera directa y reducida */
let miCoche: any = new Coche();

/* se le pasa el metodo a la clase */

/* lo valida para que typescript lo compile de forma correcta, manera reducida (miCoche as any) */
miCoche.acelerar();
