import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartModel } from 'src/app/models/CartModel';

import { CartModelAdd } from 'src/app/models/CartModelAdd';
import { LoggedInUserModel } from 'src/app/models/LoggedInUserModel';
import { CartService } from 'src/app/service/CartService/cart.service';
import { JwtServiceService } from 'src/app/service/JwtService/jwt-service.service';
import { UserService } from 'src/app/service/UserService/user.service';
import {ProductService} from "../../service/productService/product.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartService:CartService,private productService:ProductService,private router:Router,private jwtService:JwtServiceService,private userService:UserService,private cookieService:CookieService){}
  isLoggedIn:boolean=(this.cookieService.get("JWT").length>0)||false;
  total:number=0;
  ngOnInit(): void {
      this.first();
  }
  isCartEmpty=false;
  cartItems:CartModel[]=[];
  getCountOfProduct(id:Number):Number{
    console.log(id);
    let ans!:Number;
    this.productService.getProductCountById(id).subscribe((res:Number)=>
    {
        ans=res;
    });
    console.log("ans"+ans);
    return ans;
  }
  first(){
    if(this.isLoggedIn)
    {
      let jwt=this.cookieService.get("JWT");
      let email=this.jwtService.emailFromToken(jwt);
      this.userService.getUserDetails(email).subscribe((res:LoggedInUserModel)=>{  
        let id=Number(res.userId);
      this.cartService.getCartItems(id).subscribe((res:any)=>{
        this.total=0;
        this.clearArray();
        this.isCartEmpty=false;
        for(var element of res){
          this.isCartEmpty=true;
          this.total=this.total+Number(element.price);
          this.total=Number(this.total.toFixed(3));
          this.cartItems.push(element);
        }
      });
      })
    }


  }
  clearArray() {
    while(this.cartItems.length){
      this.cartItems.pop();
    }
  }
  changeCart(cartModel:CartModel) {
      let cartModelAdd = new CartModelAdd();
      cartModelAdd.productid = cartModel.productid;
      cartModelAdd.quantity = Number(cartModel.quantity);
      cartModelAdd.userid = 13;
      this.cartService.addCartItem(cartModelAdd).subscribe((req: any) => {})
  }
  deteleCartItem(id:number){
      this.cartService.deleteCartItem(id).subscribe((res:any)=>{})
      this.first();
  }
  checkoutSucess(cartItems : CartModel[]){
     let cartItem:CartModel = new CartModel();
     this.cartService.deleteProduct(cartItems).subscribe((res:any)=>{})
     this.router.navigate(['/delivery']);
  }
}
