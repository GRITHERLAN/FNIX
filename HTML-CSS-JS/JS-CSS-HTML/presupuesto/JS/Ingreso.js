class Ingreso extends Dato {
  static contadorIngresos = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._idI = ++Ingreso.contadorIngresos;
  }

  get idI() {
    return this._idI;
  }
}