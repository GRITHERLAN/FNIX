// decorador basico
/* decoradores con parametros */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoradorTurbo(target) {
    console.log("El coche esta equipado con un turbo", target.name);
}
function DecoradorConMsj(msj) {
    return function (target) {
        console.log(`mi ${target.name} te manda este MSJ: ${msj}`);
    };
}
function AgregarMetodo(target) {
    /* se crea metodo en el decorador de esta manera */
    target.prototype.acelerar = function () {
        console.log("Acelerando desde un metodo extra en un decorador " + target.name);
    };
}
/* lo valida para que typescript lo compile de forma correcta */
/* interface Coche {
  acelerar: () => void;
} */
// @DecoradorTurbo le pasa como parametro automatico la clase de abajo
// @DecoradorConMsj("El Mejor Curso de maquetacion WEB") se se le pasa el primer parametro y automaticamente la clase
let Coche = class Coche {
    constructor() {
        console.log("El coche esta arrancado!!!");
    }
};
Coche = __decorate([
    AgregarMetodo
], Coche);
/* lo valida para que typescript lo compile de forma correcta, manera directa y reducida */
let miCoche = new Coche();
/* se le pasa el metodo a la clase */
/* lo valida para que typescript lo compile de forma correcta, manera reducida (miCoche as any) */
miCoche.acelerar();
export {};
