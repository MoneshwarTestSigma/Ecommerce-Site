import { Component ,Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/service/productService/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private productService:ProductService){}
  laptop: ProductModel[] = []; 
  bag: ProductModel[] = []; 
  mobile: ProductModel[] = []; 
  decorators: ProductModel[] = []; 
  ngOnInit() {
    this.first();
  }
  isLoggedIn:boolean=false;
  @Input() searchItem:string="";
  searcher()
  {
    this.isLoggedIn=true;
    console.log(this.searchItem);
  }
  logout()
  {
    this.isLoggedIn=false;
  }
  first()
  {
        this.productService.getAllProducts().subscribe((resu: ProductModel[])=>{
          for(var res of resu)
          {
            
            console.log("over");
            
            
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
            
        })
        console.log(this.mobile);
        console.log(this.bag);
        console.log(this.laptop);
        console.log(this.decorators);
        
        
        
        
  }
}
