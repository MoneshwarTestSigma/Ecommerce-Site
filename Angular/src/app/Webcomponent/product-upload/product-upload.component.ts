import { Component } from '@angular/core';
import { ProductType } from '../datatypes/ProductType';
import { FileHandle } from '../datatypes/FileHandle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent {
  constructor(private sanitizer: DomSanitizer){}
  product:ProductType={
    productName: '',
    productPrice: '',
    productCatagory: '',
    productImage: [],
    productQuantity: '',
    productDescription: ''
  } 
  addProduct()
  {
    console.log(this.product);
  }
  imageSelected(event:any)
  {
    if(event.target.file)
    {
      const currentFile=event.target.file[0];
      const fileHande:FileHandle={
        file: currentFile,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(currentFile)
        )
      }
      this.product.productImage.push(fileHande);
    }
    
  }
}
