import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { ApiHTTP } from '../../services/api-http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-http',
  imports: [FormsModule],
  templateUrl: './listar-http.html',
  styleUrl: './listar-http.css',
})
export class ListarHttp {

  /* creamos bandera para activar form de Editar */
  public habilitarEdit: number = 0

  /* obtenemos id para editar */
  public idEdit: string = ""

  /* ´variables signals, para que sean mas reactivas y se renderize */
  public name = signal("")
  public description = signal("")
  public items = signal<any[]>([])

  /* bandera para renderizar vista */
  public reload = signal(0);

  /* utilizamos computed para que reciba las signals y sea reactivo el objeto */
  public project = computed(() => ({
    name: this.name(),
    description: this.description(),
  }));

  /* instanciamos el service */
  constructor(private api: ApiHTTP) {
    effect(() => {
      this.reload()
      this.cargar()
    })
  }

  /* cargamos items */
  cargar() {
    this.api.getItems().subscribe({
      next: (res) => {
        this.items.set(res.projectList)
        this.name.set("")
        this.description.set("")
        console.log("Proyectos cargados", res.status)
      },
      error: (err) => {
        console.log("Error al cargar", err.status)
      }
    });
  }


  /* Guardamos items */
  enviar() {
    this.api.saveItems(this.project()).subscribe({
      next: (res) => {
        console.log('Guardado exitoso', res)
        this.reload.update(v => v + 1);
      },
      error: (err) => {
        console.error('Error al guardar', err)
      }
    });
  }

  /* Eliminamos Item */
  eliminar(id: string) {
    this.api.deleteItem(id).subscribe({
      next: (res) => {
        console.log('eliminado exitoso', res)
        this.reload.update(v => v + 1);
      },
      error: (err) => {
        console.error('Error al guardar', err)
      }
    });
  }

  /* Editamos el item hace juego con la clase Modificar() */
  editAct(id: string) {

    this.habilitarEdit = 1

    this.idEdit = id

    this.api.OneItem(id).subscribe({
      next: (res) => {
        console.log('modificado exitoso', res)
        this.name.set(res.oneProject.name)
        this.description.set(res.oneProject.description)
      },
      error: (err) => {
        console.error('Error al guardar', err)
      }
    });

  }
  /* modifica item, depende de la clase editact */
  modificar(id: string) {
    this.habilitarEdit = 0
    this.api.updateItem(id, this.project()).subscribe({
      next: (res) => {
        console.log('modificado exitoso', res)
        this.reload.update(v => v + 1);
      },
      error: (err) => {
        console.error('Error al guardar', err)
      }
    });
  }

  /* cambia el estado */
  modificarState(id: string, state: any) {
    this.api.updateState(id, state).subscribe({
      next: (res) => {
        console.log('modificado exitoso', res)
        this.reload.update(v => v + 1);
      },
      error: (err) => {
        console.error('Error al guardar', err)
      }
    });
  }

}


