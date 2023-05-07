import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/ProductModel';
import { ImageService } from 'src/app/service/imageService/image.service';
import { ProductService } from 'src/app/service/productService/product.service';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent {
  isFormValid() {
    return (
      this.product.name &&
      this.product.category &&
      this.product.description &&
      this.product.price &&
      this.product.count &&
      this.selectedFile
    );
  }
  constructor(private imageService: ImageService,private productService:ProductService,private router:Router) { }
  product=new ProductModel();
  addProduct(){
      this.productService.addProduct(this.product).subscribe((res:ProductModel)=>{       
        this.performUpload(res.id);     
      })
      this.router.navigate(['/']);
  }
  public formData = new FormData();
  public selectedFile!: File ;
  ngOnInit() {
  }
  onSelectFile(event:any) {
      this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }
  performUpload(id:Number) {
      this.formData.set('file', this.selectedFile, this.selectedFile.name);
      this.imageService.uploadImage(this.formData,id).subscribe(
        (res: any) => {
    }
  );
  }
  canEnableUpload():boolean{
    return true;
  }
}
