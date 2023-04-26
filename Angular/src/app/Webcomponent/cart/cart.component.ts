import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/CartModel';
import { CartModelAdd } from 'src/app/models/CartModelAdd';
import { CartService } from 'src/app/service/CartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private cartService:CartService){}
  total=0;
  temp=0;
  ngOnInit(): void {
      this.first();
  }
  cartItems:CartModel[]=[];
  first()
  {
      let id=7;// we need to get this one 
      this.cartService.getCartItems(id).subscribe((res:CartModel[])=>
      {
        this.total=0;
        this.clearArray();
        for(var element of res)
        {
          this.total=this.total+Number(element.price);
            this.cartItems.push(element);
        }
      });
       
  }
  clearArray() {
    while(this.cartItems.length)
    {
      this.cartItems.pop();    
    }
  }
  changeCart(cartModel:CartModel)
  {
    console.log("Clicke on button");
    
     let cartModelAdd=new CartModelAdd();
     cartModelAdd.productid=cartModel.productid;
     cartModelAdd.quantity=Number(cartModel.quantity);
     cartModelAdd.userid=7;
     this.cartService.addCartItem(cartModelAdd).subscribe(req=>{
      console.log(req);
      
     })
  }
  changer()
  {
    console.log("clicked");
    
  }
}
