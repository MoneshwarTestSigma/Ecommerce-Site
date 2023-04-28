import { Component ,Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private productService:ProductService,private cartSevice:CartService,private jwtService:JwtServiceService,private userService:UserService,private router:Router){}
  laptop: ProductModel[] = [];
  bag: ProductModel[] = [];
  mobile: ProductModel[] = [];
  decorators: ProductModel[] = [];
  userName:string="";
  isOwner:boolean=false;
  ngOnInit() {
    this.first();
  }
  isLoggedIn:boolean=(localStorage.getItem("isLoggedIn")=="true")||false;
  @Input() searchItem:string="";
  searcher()
  {
      if(this.searchItem.length==0)
      {
        this.first();
      }
      else
      {
        this.productService.getAllProductsLike(this.searchItem).subscribe((res:ProductModel[])=>{
          this.fillArray(res);

        })
        console.log(this.searchItem);
      }

  }
  logout()
  {
    this.isLoggedIn=false;
    localStorage.clear();
  }
  first()
  {
    if(this.isLoggedIn)
    {
      let jwt=localStorage.getItem("JWT");
      let email=this.jwtService.emailFromToken(jwt);
      this.userService.getUserDetails(email).subscribe((res:LoggedInUserModel)=>{
        console.log("Logged in user details:"+res);
        
       this.userName=res.name;
       if(res.type=="ADMIN")
       {
        this.isOwner=true;
       }
        
      })
      
    }
        this.productService.getAllProducts().subscribe((resu: ProductModel[])=>{

          this.fillArray(resu);

        })
        console.log(this.mobile);
        console.log(this.bag);
        console.log(this.laptop);
        console.log(this.decorators);
  }

  clearArray() {
    while(this.mobile.length)
    {
      this.mobile.pop();
    }
    while(this.bag.length)
    {
      this.bag.pop();
    }
    while(this.laptop.length)
    {
      this.laptop.pop();
    }
    while(this.decorators.length)
    {
      this.decorators.pop();
    }
  }
  addToCart(productModel:ProductModel)
  {
    let cartModelAdd= new CartModelAdd();
    console.log("product id:"+productModel.id);

    cartModelAdd.productid=productModel.id;
    cartModelAdd.quantity=1;
    cartModelAdd.userid=13;
      this.cartSevice.addCartItem(cartModelAdd).subscribe(res=>{
        console.log(res);

      });
  }

fillArray(resu:ProductModel[])
{
  this.clearArray();
  for(var res of resu)
          {
            if(res.category=="MOBILE")
            {
              this.mobile.push(res);
            }
            else if(res.category=="BAG")
            {
              this.bag.push(res);
            }
            else if(res.category=="LAPTOP")
            {
              this.laptop.push(res);
            }
            else{
              this.decorators.push(res);
            }
          }
}
addProduct()
{
  this.router.navigate(['product-upload']);
}
}
