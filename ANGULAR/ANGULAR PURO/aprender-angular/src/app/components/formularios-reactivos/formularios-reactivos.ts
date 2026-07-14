import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { minLength } from '@angular/forms/signals';

@Component({
  selector: 'app-formularios-reactivos',
  imports: [ReactiveFormsModule],
  templateUrl: './formularios-reactivos.html',
  styleUrl: './formularios-reactivos.css',
})
export class FormulariosReactivos {

  /* se instancia la clase FormGroup para crear el formulario reactivo */
  public formulario = new FormGroup({

    /* se usa FormControl, para aclarar lo que contendra dicha propiedad */
    nombre: new FormControl('', [
      /* se usa validators para controlar lo que se almacenara en la propiedad */
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(40)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    edad: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(100)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7)
    ]),
  })

  onSubmit() {
    if (this.formulario.valid) {
      console.info("Formulario esta valido", this.formulario.value);

    } else {
      console.warn("Formulario no valido!!");

    }
  }

}
