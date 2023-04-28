import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private cartService:CartService,private productService:ProductService,private router:Router,private jwtService:JwtServiceService,private userService:UserService){}
  isLoggedIn:boolean=(localStorage.getItem("isLoggedIn")=="true")||false;
  total:number=0;
  temp=0;
  ngOnInit(): void {
      this.first();
  }
  isCartEmpty=false;
  cartItems:CartModel[]=[];
  getCountOfProduct(id:Number):Number
  {
    console.log(id);
    let ans!:Number;
    this.productService.getProductById(id).subscribe((res:Number)=>
    {
        ans=res;
    });
    console.log("ans"+ans);
    return ans;
  }
  first()
  {
    if(this.isLoggedIn)
    {
      let jwt=localStorage.getItem("JWT");
      let email=this.jwtService.emailFromToken(jwt);
      this.userService.getUserDetails(email).subscribe((res:LoggedInUserModel)=>{
        console.log("Logged in user details:"+res);
        let id=Number(res.userId);
      this.cartService.getCartItems(id).subscribe((res:any)=>
      {
        console.log(res);
        this.total=0;
        this.clearArray();
        this.isCartEmpty=false;
        for(var element of res)
        {
          this.isCartEmpty=true;
          this.total=this.total+Number(element.price);
          this.total=Number(this.total.toFixed(3));
            this.cartItems.push(element);
            console.log(element);
        }
      });
       
        
      })
    }
      

  }
  clearArray() {
    while(this.cartItems.length)
    {
      this.cartItems.pop();
    }
  }
  changeCart(cartModel:CartModel) {
    // console.log("Clicke on button");
    // let totalCount = this.getCountOfProduct(cartModel.productid);
    // if (Number(cartModel.quantity) <= totalCount) {
      let cartModelAdd = new CartModelAdd();
      cartModelAdd.productid = cartModel.productid;
      cartModelAdd.quantity = Number(cartModel.quantity);
      cartModelAdd.userid = 13;
      console.log(cartModel);
      
      this.cartService.addCartItem(cartModelAdd).subscribe((req: any) => {
        console.log(req);


      })
    // }
    // else {
    //   console.log("cant increase");
    //   cartModel.quantity=totalCount;
    // }
  }
  changer()
  {
    console.log("clicked");

  }
  deteleCartItem(id:number)
  {
    console.log(id);

      this.cartService.deleteCartItem(id).subscribe((res:any)=>{
      })
      this.first();
  }
  checkoutSucess(cartItems : CartModel[]){
     let cartItem:CartModel = new CartModel();
     console.log("checkout came "+ cartItems);
     for(cartItem of cartItems){
       console.log(cartItem);
     }
     this.cartService.deleteProduct(cartItems).subscribe((res:any)=>{
       console.log(res);
     })
     this.router.navigate(['/delivery']);
    console.log("product quantity deleted");
  }
}
