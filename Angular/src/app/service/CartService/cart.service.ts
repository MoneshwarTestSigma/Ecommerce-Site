import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Constants } from 'src/app/constants/Constants';
import { CartModel } from 'src/app/models/CartModel';
import { CartModelAdd } from 'src/app/models/CartModelAdd';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient,private cookieService:CookieService) { }
  private token:string = "Bearer "+ this.cookieService.get("JWT");
  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','*')
    .set('Access-Control-Allow-Headers','*')
    .set('Authorization',this.token);
  getCartItems(id:number):Observable<CartModel[]>{
    return this.http.get<CartModel[]>(`${Constants.api}/cart/${id}`,{headers:this.headers}).pipe(      
      map(data=> data.map(data1=> new CartModel().deserialize(data1))),
      catchError(() => throwError('Problem while fetching ElementFilter'))
    )
  }
  addCartItem(cartItem: CartModelAdd){
      return this.http.post<any>(`${Constants.api}/cart`,cartItem.serialize(),{headers:this.headers});
  }
  deleteCartItem(id: number){
    return this.http.delete<any>(`${Constants.api}/cart/${id}`,{headers:this.headers});
  }

  deleteProduct(cartItems: CartModel[]) {
    return this.http.post<CartModel[]>(`${Constants.api}/cart/checkout`,cartItems,{headers:this.headers});
  }
}
