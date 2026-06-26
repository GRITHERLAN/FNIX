import { Component } from '@angular/core';
import { PeliculaCine } from '../../models/pelicula';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cine',
  imports: [FormsModule, NgStyle],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo: string
  public peliculas: Array<PeliculaCine>
  /* para trabajar con formularios y binding bidireccional */
  public mi_pelicula: string = ""
  public pelis_sin_datos: string[] = []
  public color: string = "#fff"

  constructor() {
    this.titulo = "Modelos"
    this.peliculas = [
      new PeliculaCine(1, "El padrino", "Mafie", "Copola", 1976, "Prime Video", false),
      new PeliculaCine(2, "El padrino 2", "Mafie", "Copola", 1976, "Prime Video", false)
    ]
  }

  ngDoCheck() {
    console.log(this.mi_pelicula);
  }

  showPelicula() {
    alert(this.mi_pelicula)
  }

  addPelicula() {
    /* this.pelis_sin_datos.push(this.mi_pelicula) */
    let id = this.peliculas.length + 1
    let nueva_peli = new PeliculaCine(id, this.mi_pelicula)
    this.peliculas.push(nueva_peli)
  }

  borrarPeli(indice: number) {
    this.peliculas.splice(indice, 1)
  }

  focoIn() {
    console.warn("Estas dentro del input de pelis");

  }
  focoOut() {
    console.warn("Estas Fuera del input de pelis");

  }

  pulsandoTecla(e: KeyboardEvent) {
    console.info("Estas pulsado una tecla " + e.key)
  }

}
