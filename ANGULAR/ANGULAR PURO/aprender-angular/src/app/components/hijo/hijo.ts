import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  nombreDelHijo: string = "Juanito"

  /* recibe del componente padre */
  @Input() elNombreDeMiPapa: string = ""
  /* manda desde este componente hijo al padre */
  @Output() saludoDelHijo = new EventEmitter()

  enviarSaludo() {
    this.saludoDelHijo.emit("Hola que tal estas papa, saludos")
  }
}
