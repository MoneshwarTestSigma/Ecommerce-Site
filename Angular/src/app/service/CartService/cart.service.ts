import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CartModel } from 'src/app/models/CartModel';
import { CartModelAdd } from 'src/app/models/CartModelAdd';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }
  private token:string = "Bearer "+ localStorage.getItem("JWT");

  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','*')
    .set('Access-Control-Allow-Headers','*')
    .set('Authorization',this.token)
  ;
  getCartItems(id:number)
  {
    return this.http.get<any>(`http://localhost:8080/cart/${id}`,{headers:this.headers});
  }
  addCartItem(cartItem: CartModelAdd)
  {
    console.log(this.token);
    
      console.log(cartItem.userid);
      return this.http.post<any>(`http://localhost:8080/cart`,cartItem.serialize(),{headers:this.headers});
  }
  deleteCartItem(id: number)
  {
    return this.http.delete<any>(`http://localhost:8080/cart/delete/${id}`,{headers:this.headers});
  }

  deleteProduct(cartItems: CartModel[]) {

    return this.http.post<CartModel[]>(`http://localhost:8080/product/quantity`,cartItems,{headers:this.headers});
  }
}
