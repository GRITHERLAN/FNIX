import { Component, signal } from '@angular/core';
import { Signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-carrito-signals',
  imports: [],
  templateUrl: './carrito-signals.html',
  styleUrl: './carrito-signals.css',
})
export class CarritoSignals {
  /* se crean las signals */
  public NombreTienda = signal("Mi Tienda")
  public canticadProductos = signal(+0)
  public totalCarrito = signal(0)
  public ProductoX5 = computed(() => 0 + 5)
  public TotalX5 = computed(() => 1 * 5)

  public precioBase: number = 37
  public notificacion = signal("")
  public limiteDes: number = 0
  public notificaciondes: string = ""

  constructor() {
    /* es para que recargue la funcion donde se encuentra la variable
    tipo señal que hace el cambio */
    effect(() => {
      this.comprobarNotifiacion()
      console.log("Comprobando Noti");
    })
  }

  comprobarNotifiacion() {
    let limiteP = 177
    if (this.totalCarrito() > limiteP) {
      this.notificacion.set(`Haz Superado el precio ${limiteP} euros`)
    } else {
      this.notificacion.set("")
    }
  }

  addProducto() {
    this.canticadProductos.update(cantidadpro => cantidadpro + 1)
    this.totalCarrito.update(totalcar => totalcar + this.precioBase)
  }

  addfiveProduct() {
    this.canticadProductos.update(cantidadpro => cantidadpro + this.ProductoX5())
    this.totalCarrito.update(totalcar => totalcar + (this.precioBase * this.TotalX5()))
  }

  borrarProduct() {
    if (this.canticadProductos() >= 1) {
      this.canticadProductos.update(cantidadpro => cantidadpro - 1)
      this.totalCarrito.update(totalcar => totalcar - this.precioBase)
    }
  }

  borrarProductAll() {
    this.canticadProductos.update(() => 0)
    this.totalCarrito.update(() => 0)
  }

  descuento() {
    if (this.totalCarrito() > 0) {

      if (this.limiteDes == 0) {
        this.totalCarrito.update(totalcar => totalcar * 0.8)
        this.totalCarrito.set(parseFloat(this.totalCarrito().toFixed(2)))
        this.limiteDes = 1

      } else {
        this.notificaciondes = "Ya se aplico un cupon de descuento"
      }

    } else {
      this.notificaciondes = "ingrese un producto"
    }

  }

  /*   contador = signal<number>(0)
    incremento = signal<number>(1)
    devuelve una variacion de la signal que se este cambiando
    contadorX3 = computed(() => this.contador() * 3)
    msj: string = ""
  
    aumentar() {
      // this.contador.set(this.contador() + 1)
      this.contador.update(contadorActual => contadorActual + this.incremento())
  
      if (this.contador() == 3) {
        this.msj = "Rata imunda"
      }
    }
  
    ngOnInit() {
      console.log("La aplicacion ha cargado");
  
    }
  
    ngDoCheck() {
      console.log("se ha detectado un cambio en el componente");
  
    } */
}
