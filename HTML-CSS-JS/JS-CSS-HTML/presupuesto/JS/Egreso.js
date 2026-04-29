class Egreso extends Dato {
  static contadorEgreso = 0;

  constructor(descripcion, valor) {
    super(descripcion, valor);
    this._idE = ++Egreso.contadorEgreso;
  }

  get idE() {
    return this._idE;
  }
}
