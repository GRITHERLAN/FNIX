import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [FormsModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  public NombreTienda = "Mi Tienda"
  public canticadProductos: number = 0
  public totalCarrito: number = 0
  public notificacion: string = ""
  public limiteDes: number = 0
  public notificaciondes: string = ""
  

  public comprobarNotifiacion() {
    console.log("Comprobando Noti");
    let limiteP = 177
    if (this.totalCarrito > limiteP) {
      this.notificacion = `Haz Superado el precio ${limiteP} euros`
    } else {
      this.notificacion = ""
    }
  }

  ngOnInit() {
    this.comprobarNotifiacion()
  }

  ngDoCheck() {
    console.log("Comprobado el component");
  }

  addProducto() {
    this.canticadProductos += 1
    this.totalCarrito += 37
    this.comprobarNotifiacion()
  }


  addfiveProduct() {
    this.canticadProductos += 5
    this.totalCarrito += 37 * 5
    this.comprobarNotifiacion()
  }

  borrarProduct() {
    if (this.canticadProductos >= 1) {
      this.canticadProductos -= 1
      this.totalCarrito -= 37
      this.comprobarNotifiacion()
    }
  }

  borrarProductAll() {
    this.canticadProductos = 0
    this.totalCarrito = 0
    this.comprobarNotifiacion()
  }

  descuento() {

    if (this.totalCarrito > 0 && this.limiteDes == 0) {
      this.totalCarrito *= 0.8
      this.totalCarrito = parseFloat(this.totalCarrito.toFixed(2))
      this.comprobarNotifiacion()
      this.limiteDes = 1
    } else {
      this.notificaciondes = "Ya se aplico un cupon de descuento"
    }

  }


}
