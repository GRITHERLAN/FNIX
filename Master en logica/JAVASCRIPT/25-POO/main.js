/* programacion orientada a objetos (POO) */

/* molde */
class Gato {
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

/* set y get como propiedades */
gato1.guardarcolor = "Verde";

console.log(
  `${gato1.nombre} es de raza ${gato1.getRaza()} y es de color ${gato1.sacarcolor}`,
);

/* static */
/* Gato.saludar(); */



class GatoEspecial extends Gato {
  constructor(nombre, raza, color, habilidad) {
    super(nombre, raza, color);
    this.habilidad = habilidad;
  }

  setHabilidad(habilidad) {
    this.habilidad = habilidad;
  }

  getHabilidad() {
    return this.habilidad;
  }

  ejecutar() {
    console.log(
      `${this.nombre} esta utilizando su habilidad de ${this.habilidad} para ayudar`,
    );
  }
}

let superGato = new GatoEspecial(
  "nico",
  "japonesa",
  "blanco",
  "cavar en la tierra",
);

superGato.ejecutar();

console.log(superGato.getRaza());
