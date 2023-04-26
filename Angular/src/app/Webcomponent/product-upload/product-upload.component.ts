import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.css']
})
export class ProductUploadComponent {
  constructor(private imageService: ImageService) { }

  product=new ProductModel();
  addProduct()
  {
   this.performUpload();

    console.log(this.product);
  }
  public formData = new FormData();
  public selectedFile!: File ;
  ngOnInit() {

  }

  onSelectFile(event:any) {
      this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }

  performUpload() {
      this.formData.set('file', this.selectedFile, this.selectedFile.name);
      this.imageService.uploadImage(this.formData).subscribe(
        (res: any) => {
    }
  );
  }
  canEnableUpload():boolean{
    return true;
  }
  
}
