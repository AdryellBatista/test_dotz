import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }


  getProducts() {
    return this.http.get<any[]>(`${environment.urlApi}/products`);
  }

  getProduct(idProduct) {
    return this.http.get<any>(`${environment.urlApi}/products/${idProduct}`);
  }

  setProduct(objProduct) {
    return this.http.post<any>(`${environment.urlApi}/products`, objProduct);
  }

  editProduct(objProduct) {
    return this.http.put<any>(`${environment.urlApi}/products/${objProduct.id}`, objProduct);
  }

  deleteProduct(idProduct) {
    return this.http.delete<any[]>(`${environment.urlApi}/products/${idProduct}`);
  }
}
