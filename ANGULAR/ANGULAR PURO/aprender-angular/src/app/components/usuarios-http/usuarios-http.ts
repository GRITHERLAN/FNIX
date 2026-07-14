import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../services/usuario';
import { ChangeDetectorRef } from '@angular/core'; /* importar clase nativa */
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-http',
  imports: [FormsModule],
  templateUrl: './usuarios-http.html',
  styleUrl: './usuarios-http.css',
})
export class UsuariosHTTP implements OnInit {


  public ListadoUsuarios: any = { data: [] };
  public UsuarioOne: any = { data: [] };
  public userId = 1;
  constructor(private _usuarioService: Usuario,
    private cd: ChangeDetectorRef, /* la usamos en una variable */
    private route: ActivatedRoute /* se activa para que la variable quede en funcion de interaccion con ruta */
  ) {

    console.log("Componente de usuarios cargado!!");

  }

  ngOnInit() {
    /* se obtiene el parametro por la ruta con parammMap y suscribe*/
    this.route.paramMap.subscribe(params => {
      this.userId = parseInt(params.get("id") || "8")
    })
    this.ObtenerListados()
    this.ObtenerUserOne();
  }

  ObtenerListados() {
    this._usuarioService.getUser().subscribe({
      next: (resultado: any) => {
        this.ListadoUsuarios = resultado
        console.log(this.ListadoUsuarios.data);
        this.cd.detectChanges()

      },
      error: error => {
        console.log(error);

      },
      complete: () => {
        console.log("Completado");

      }
    }
    )
  }

  ObtenerUserOne() {
    this._usuarioService.getUserOne(this.userId).subscribe({
      next: (resultado: any) => {
        this.UsuarioOne = resultado.data
        console.log(this.UsuarioOne)
        this.cd.detectChanges()/* forzamos los cambios */

      },
      error: error => {
        console.log(error);

      },
      complete: () => {
        console.log("Completado");

      }
    }
    )
  }

  guardarUser() {
    let nuevouser = {
      name: "Nicolas",
      job: "programador web"
    }

    this._usuarioService.createUser(nuevouser).subscribe(respuesta =>
      console.log("Usuario creado correctamente", respuesta)
    )
  }

}
