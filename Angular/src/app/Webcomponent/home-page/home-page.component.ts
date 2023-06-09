import { Component ,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CartModel } from 'src/app/models/CartModel';
import { CartModelAdd } from 'src/app/models/CartModelAdd';
import { LoggedInUserModel } from 'src/app/models/LoggedInUserModel';
import { ProductModel } from 'src/app/models/ProductModel';
import { CartService } from 'src/app/service/CartService/cart.service';
import { JwtServiceService } from 'src/app/service/JwtService/jwt-service.service';
import { ProductService } from 'src/app/service/productService/product.service';
import {UserService} from 'src/app/service/UserService/user.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private productService:ProductService,private cartSevice:CartService,private jwtService:JwtServiceService,private userService:UserService,private router:Router,private cookieService:CookieService){}
  laptop: ProductModel[] = [];
  bag: ProductModel[] = [];
  mobile: ProductModel[] = [];
  decorators: ProductModel[] = [];
  userName:string="";
  isOwner:boolean=false;
  userObject!:LoggedInUserModel;
  cartCount=0;
  ngOnInit() {
    this.first();
  }
  isLoggedIn:boolean=(this.cookieService.get("JWT").length>0)||false;
  @Input() searchItem:string="";
  searcher(){
      if(this.searchItem.length==0){
        this.first();
      }
      else{
        this.productService.getAllProductsLike(this.searchItem).subscribe((res:ProductModel[])=>{
          this.fillArray(res);
        })
      }
  }
  logout(){
    this.isLoggedIn=false;
    this.cookieService.delete("JWT");
  }
  first(){
    if(this.isLoggedIn)
    {
      let jwt=this.cookieService.get("JWT");
      let email=this.jwtService.emailFromToken(jwt);
      this.userService.getUserDetails(email).subscribe((res:LoggedInUserModel)=>{
        this.userObject=res;
        this.userName=res.name;
        if(res.type=="ADMIN"){
          this.isOwner=true;
        }
        this.cartSevice.getCartItems(Number(res.userId)).subscribe((res1:CartModel[])=>{
          this.cartCount=0;
          for(var temp of res1 ){
              this.cartCount++;
          }
        })
      })

    }
        this.productService.getAllProducts().subscribe((resu: ProductModel[])=>{
          this.fillArray(resu);
        })
  }

  clearArray() {
    while(this.mobile.length){
      this.mobile.pop();
    }
    while(this.bag.length){
      this.bag.pop();
    }
    while(this.laptop.length){
      this.laptop.pop();
    }
    while(this.decorators.length){
      this.decorators.pop();
    }
  }
  addToCart(productModel:ProductModel){
    if(this.isLoggedIn){
      let cartModelAdd= new CartModelAdd();
      cartModelAdd.productid=productModel.id;
      cartModelAdd.quantity=1;
      cartModelAdd.userid=Number(this.userObject.userId);
        this.cartSevice.addCartItem(cartModelAdd).subscribe(res=>{});
        this.first();
    }
    else{
      alert("Login First");
      this.router.navigate(['login']);
    }

  }

fillArray(resu:ProductModel[])
{
  this.clearArray();  
  for(var res of resu){
      if(res.category=="MOBILE"){
        this.mobile.push(res);
      }
      else if(res.category=="BAG"){
        this.bag.push(res);
      }
      else if(res.category=="LAPTOP"){
        this.laptop.push(res);
      }
      else{
        this.decorators.push(res);
      }
  }
}
addProduct(){
  this.router.navigate(['product-upload']);
}
}
