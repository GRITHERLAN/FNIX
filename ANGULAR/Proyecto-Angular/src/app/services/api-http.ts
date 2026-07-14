import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHTTP {
  public api: string = ""

  constructor(private http: HttpClient) {
    this.api = "http://localhost:3977/api/project/"
  }

  /* Obtenemos items */
  getItems(): Observable<any> {
    return this.http.get(this.api + "list");
  }

  /* guardamos items */
  saveItems(proyecto: object): Observable<any> {
    return this.http.post(this.api + "save", proyecto);
  }

  /* borrar item */
  deleteItem(id: string): Observable<any> {
    return this.http.delete(this.api + "delete-item/" + id);
  }

  /* modificamos item */
  updateItem(id: string, proyecto: object): Observable<any> {
    return this.http.put(this.api + "update/" + id, proyecto);
  }

  /* cambiamos estado */
  updateState(id: string, state: string): Observable<any> {
    return this.http.put(this.api + "state/" + id, state);
  }

  /* obtenemos un item, se usa para mostrar datos del elemento aeditar */
  OneItem(id: string): Observable<any> {
    return this.http.get(this.api + "item/" + id);
  }
}
