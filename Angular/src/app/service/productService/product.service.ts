import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/LoginModel';
import { ProductModel } from 'src/app/models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {  }
  getAllProducts():any {
    return this.http.get<any>("http://localhost:8080/product/all");
  }
  getAllProductsLike(searchItem:string)
  {
    return this.http.get<any>(`http://localhost:8080/product?query=name:${searchItem}`);
  }
}
