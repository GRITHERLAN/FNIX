import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Usuario {

  public api: string = ""

  constructor(private http: HttpClient) {
    this.api = "https://reqres.in/"
  }
  getUser() {
    return this.http.get(this.api + "api/users?page=2", {
      headers: {
        'x-api-key': 'reqres_dff3a63edf9b4c8baead86f36822fa40'
      }
    })
  }

  getUserOne(userId: number) {
    return this.http.get(this.api + "api/users/" + userId, {
      headers: {
        'x-api-key': 'reqres_dff3a63edf9b4c8baead86f36822fa40'
      }
    })
  }

  createUser(usuario: any) {
    return this.http.post(this.api + "api/users/", usuario, {
      headers: {
        'x-api-key': 'reqres_dff3a63edf9b4c8baead86f36822fa40'
      }
    })
  }
}
