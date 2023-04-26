import { Component } from '@angular/core';
import { SignUpModel } from 'src/app/models/SignUpModel';
@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent {
  form =new SignUpModel();
  isSubmitted=false;
  userData : any[]=[];
  temp="";
  i=1;
  submit()
  {
    this.form.type="owner";
    localStorage.setItem("0"+this.i,JSON.stringify(this.form));
    this.i++;
  }
  clicked()
  {
      this.isSubmitted=true;
  }

}
