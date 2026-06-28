import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {

  public hola: string = "hola"

  ngOnInit() {
    console.log('el componente de peliculas esta arrancado');
  }

  /* una vez el componente deja de mostrarse en el componente padre, se activa este HOOK */
  ngOnDestroy() {
    console.log('el componente de pelis ha sido eliminado');
  }
}
