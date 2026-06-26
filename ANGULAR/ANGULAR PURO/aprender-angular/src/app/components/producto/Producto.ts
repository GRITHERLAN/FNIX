import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../pelicula/pelicula';
import { Usuario } from '../usuario/usuario';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'mi-producto',
  imports: [Pelicula],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto implements OnInit {
  /* se crea un constructor, para que se inicialice antes del component */
  public nombre: string;
  public marca: string;
  public precio: number;

  public mostrar_Pelis: boolean = true;

  constructor() {
    this.nombre = 'PC portatil';
    this.precio = 4000;
    this.marca = 'asus';
  }

  ngOnInit() {
    console.log('el componente esta inicializado');
  }

  ngAfterViewInit() {
    console.log('la vista esta cargada');
  }

  ngOnChange() {
    console.log('Componente Actualizado');
  }

  ngDoCheck() {
    console.log('Componente Actualizado');
  }

  cambiarNombre() {
    this.nombre = 'PC GAMER';
  }

  pelis(mostrar: boolean) {
    if (mostrar) {
      this.mostrar_Pelis = false;
    } else {
      this.mostrar_Pelis = true;
    }
  }
}
