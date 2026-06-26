import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';
import { Producto } from '../producto/Producto';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe } from '@angular/common';
import { CambiaLetrasPipe } from '../../pipes/cambialetras.pipe';

@Component({
  selector: 'app-usuario',
  imports: [Ventas, TitleCasePipe, DatePipe, CambiaLetrasPipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  public web: string = "https://victorroblesweb.es/ruta"

  public redirigir: boolean = true

  public marcasPdel = [
    { id: 1, nombre: "siux" },
    { id: 2, nombre: "kombat" },
    { id: 3, nombre: "head" },
    { id: 4, nombre: "bullpadel" }]

  public usuario = {
    id: 1,
    nombre: "nicolas andres",
    nick: "grither",
    rol: "admin"
  }

  fecha = new Date(2030, 12, 25)

  public cambioDir() {
    if (this.redirigir) {
      this.redirigir = false
    } else {
      this.redirigir = true
    }
  }
  public cambiarestado() {
    this.marcasPdel = []
  }

}
