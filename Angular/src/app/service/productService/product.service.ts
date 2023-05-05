import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/LoginModel';
import { ProductModel } from 'src/app/models/ProductModel';
import {Constants} from 'src/app/constants/Constants'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient,private cookieService:CookieService) {  }
  private token:string = "Bearer "+ this.cookieService.get("JWT");

  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','*')
    .set('Access-Control-Allow-Headers','*')
    .set('Authorization',this.token)
  ;
  getAllProducts():any {
    return this.http.get<any>(Constants.api+"/product/inventory");
  }
  getAllProductsLike(searchItem:string)
  {
    return this.http.get<any>(`${Constants.api}/product?query=name:${searchItem}`);
  }
  addProduct(product: ProductModel)
  {
    return this.http.post<any>(`${Constants.api}/product`,product,{headers:this.headers});
  }
  getProductById(id:Number)
  {
    return this.http.get<any>(`${Constants.api}/product/${id}`);
  }
}
