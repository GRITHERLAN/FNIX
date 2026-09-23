/* clase y objetos */
class Coche {
    constructor(model, velocidad, antiguedad) {
        this.model = model;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVel() {
        this.velocidad += 1;
    }

    reducirVel() {
        this.velocidad -= 1;
    }

    datosCoche() {
        return `${this.model} y ${this.velocidad} y ${this.antiguedad}`;
    }
}

var coche1 = new Coche("BMW", 200, 2026);

coche1.aumentarVel()
coche1.aumentarVel()
coche1.aumentarVel()
coche1.aumentarVel()

document.write(coche1.datosCoche());

/* herencia */

class Autobus extends Coche {
    constructor(model, velocidad, antiguedad, pasajeros) {
        super(model, velocidad, antiguedad);
        this.pasajeros = pasajeros;
    }

    datosAutobus() {
        return `${this.model} y ${this.velocidad} y ${this.antiguedad} y ${this.pasajeros}`;
    }

}

var autobus1 = new Autobus("Pegasus", 150, 2024, 56);

document.write("<br/>");

autobus1.aumentarVel()

document.write(autobus1.datosAutobus());