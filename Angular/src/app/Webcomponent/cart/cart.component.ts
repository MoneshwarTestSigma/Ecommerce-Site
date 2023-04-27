import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/models/CartModel';

import { CartModelAdd } from 'src/app/models/CartModelAdd';
import { CartService } from 'src/app/service/CartService/cart.service';
import {ProductService} from "../../service/productService/product.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
// increase(cartModel: CartModel) {
//     cartModel.quantity=Number(cartModel.category)+1;
//     this.changeCart(cartModel);

// }
// decrease(cartModel: CartModel) {
//   cartModel.quantity=Number(cartModel.category)-1;
//     this.changeCart(cartModel);
// }
  constructor(private cartService:CartService,private productService:ProductService,private router:Router){}
   total:number=0;
  temp=0;
  ngOnInit(): void {
      this.first();
  }
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
      let id=13;// we need to get this one
      this.cartService.getCartItems(id).subscribe((res:any)=>
      {
        console.log(res);
        this.total=0;
        this.clearArray();
        for(var element of res)
        {
          this.total=this.total+Number(element.price);
          this.total=Number(this.total.toFixed(3));
            this.cartItems.push(element);
            console.log(element);
        }
      });

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
