import { Component ,Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { CartModelAdd } from 'src/app/models/CartModelAdd';
import { ProductModel } from 'src/app/models/ProductModel';
import { CartService } from 'src/app/service/CartService/cart.service';
import { ProductService } from 'src/app/service/productService/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private productService:ProductService,private cartSevice:CartService){}
  laptop: ProductModel[] = []; 
  bag: ProductModel[] = []; 
  mobile: ProductModel[] = []; 
  decorators: ProductModel[] = []; 
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
    cartModelAdd.productid=productModel.id;
    cartModelAdd.quantity=1;
    cartModelAdd.userid=7;
      this.cartSevice.addCartItem(cartModelAdd);
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
}