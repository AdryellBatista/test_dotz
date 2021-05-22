import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  getUsers() {
    return this.http.get<any[]>(`${environment.urlApi}/users`);
  }

  getUser(idUser) {
    return this.http.get<any>(`${environment.urlApi}/users/${idUser}`);
  }

  setUser(objUser) {
    return this.http.post<any>(`${environment.urlApi}/users`, objUser);
  }

  editUser(objUser) {
    return this.http.put<any>(`${environment.urlApi}/users/${objUser.id}`, objUser);
  }

  deleteUser(idUser) {
    return this.http.delete<any[]>(`${environment.urlApi}/users/${idUser}`);
  }


}
