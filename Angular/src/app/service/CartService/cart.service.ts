import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartModel } from 'src/app/models/CartModel';
import { CartModelAdd } from 'src/app/models/CartModelAdd';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }
  getCartItems(id:number)
  {
    return this.http.get<CartModel[]>(`http://localhost:8080/cart/${id}`);
  }
  addCartItem(cartItem: CartModelAdd)
  {
      console.log(cartItem.userid);
      return this.http.post<any>(`http://localhost:8080/cart`,cartItem.serialize());
  }
  deleteCartItem(id: number)
  {
    return this.http.delete<any>(`http://localhost:8080/cart/delete/${id}`);
  }

  deleteProduct(cartItems: CartModel[]) {

    return this.http.post<CartModel[]>(`http://localhost:8080/product/quantity`,cartItems);
  }
}
