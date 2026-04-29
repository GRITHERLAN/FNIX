class Coche {
  constructor(marca, velocidad, modelo) {
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.marca = marca;
  }

  aumentarVelocidad() {
    this.velocidad += 1;
  }

  reducirVelocidad() {
    this.velocidad -= 1;
  }
}

var coche1 = new Coche('BMW', 140, '2022');

document.writeln(coche1.velocidad);
console.log(coche1);
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
console.log(coche1);
document.writeln(coche1.velocidad);

class Bus extends Coche {
  constructor(marca, velocidad, modelo, bus) {
    super(marca, velocidad, modelo);
    this.bus = bus;
  }
  mostrarBus() {
    return 'Bus es este' + this.velocidad;
  }
}

var bus1 = new Bus('BMW', 555, 2025, 'BUS');
console.log(bus1.mostrarBus());
