/* programacion orientada a objetos (POO) */
/* molde */
class Gato {
    nombre;
    /* dentro de clase y metodos */
    raza;
    /* solo dentro de la clase y las que la hereden */
    color;
    constructor(nombre, raza, color) {
        /* propiedades o atributos */
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }
    /* Metodos */
    maullar() {
        console.log("Miauuuuuu " + this.nombre);
    }
    saltar() {
        console.log(`${this.nombre} a saltado`);
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    set guardarcolor(color) {
        this.color = color;
    }
    get sacarcolor() {
        return this.color;
    }
    static saludar() {
        alert("hola amigo");
    }
}
let gato1 = new Gato("Bella", "Abisinio", "Pardo");
/* metodos */
gato1.setRaza("Persa");
gato1.maullar();
gato1.saltar();
console.log(gato1.nombre);
/* set y get como propiedades */
gato1.guardarcolor = "Verde";
console.log(`${gato1.nombre} es de raza ${gato1.getRaza()} y es de color ${gato1.sacarcolor}`);
export {};
