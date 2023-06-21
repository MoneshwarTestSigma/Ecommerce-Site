import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, throwError } from 'rxjs';
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
    .set('Authorization',this.token);
  getAllProducts():Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(Constants.api+"/product/inventory").pipe(
      map(data=> data.map(data1=> new ProductModel().deserialize(data1))),
      catchError(() => throwError('Problem while fetching ElementFilter'))
    )
  }
  getAllProductsLike(searchItem:string):Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(`${Constants.api}/product?query=name:${searchItem}`).pipe(
      map(data=> data.map(data1=> new ProductModel().deserialize(data1))),
      catchError(() => throwError('Problem while fetching ElementFilter'))
    );
  }
  addProduct(product: ProductModel){
    console.log(ProductModel);
    console.log(this.headers);
    return this.http.post<any>(`${Constants.api}/product`,product.serialize(),{headers:this.headers});
  }
  getProductCountById(id:Number):Observable<Number>{
    return this.http.get<Number>(`${Constants.api}/product/${id}`);
  }
}
