import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  imports: [FormsModule],
  templateUrl: './formularios.html',
  styleUrl: './formularios.css',
})
export class Formularios {
  nombre: string = ""
  email: string = ""
  edad: number = 0
  password: string = ""

  onSubmit() {
    console.log(this.nombre, this.email, this.edad, this.password);
  }

}
