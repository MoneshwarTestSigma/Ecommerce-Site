import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/LoginModel';
import { ProductModel } from 'src/app/models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {  }
  private token:string = "Bearer "+ localStorage.getItem("JWT");

  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','*')
    .set('Access-Control-Allow-Headers','*')
    .set('Authorization',this.token)
  ;
  getAllProducts():any {
    return this.http.get<any>("http://localhost:8080/product/all");
  }
  getAllProductsLike(searchItem:string)
  {
    return this.http.get<any>(`http://localhost:8080/product?query=name:${searchItem}`);
  }
  addProduct(product: ProductModel)
  {
    return this.http.post<any>(`http://localhost:8080/product`,product,{headers:this.headers});
  }
  getProductById(id:Number)
  {
    return this.http.get<any>(`http://localhost:8080/product/countOfId/${id}`);
  }
}
