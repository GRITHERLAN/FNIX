import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
/* importamos el componente */
/* import { Producto } from './producto/Producto'; */
import { Usuario } from './components/usuario/usuario';
import { Pelicula } from './components/pelicula/pelicula';
import { Ventas } from './components/ventas/ventas';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Carrito } from './components/carrito/carrito';
import { CarritoSignals } from './components/carrito-signals/carrito-signals';

@Component({
  /* etiqueta en index */
  selector: 'app-root',
  /* lo usamos */
  imports: [CarritoSignals],
  /* usamos el archivo html exacto */
  templateUrl: './app.html',
  /* hoda de estilos personalizada */
  styleUrl: './app.css',
})
export class App {
  title = 'Este es mi primer proyecto con angular';

  titulo: string = config.title
  descripcion: string = config.description
}
