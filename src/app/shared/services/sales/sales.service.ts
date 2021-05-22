import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(
    private http: HttpClient
  ) { }


  getSales() {
    return this.http.get<any[]>(`${environment.urlApi}/sales`);
  }

  getSale(idSale) {
    return this.http.get<any>(`${environment.urlApi}/sales/${idSale}`);
  }

  setSale(objSale) {
    return this.http.post<any>(`${environment.urlApi}/sales`, objSale);
  }

  editSale(objSale) {
    return this.http.put<any>(`${environment.urlApi}/sales/${objSale.id}`, objSale);
  }

  deleteSale(idSale) {
    return this.http.delete<any[]>(`${environment.urlApi}/sales/${idSale}`);
  }
}
