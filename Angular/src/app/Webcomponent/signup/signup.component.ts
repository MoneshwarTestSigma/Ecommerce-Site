import { Component } from '@angular/core';
import { SignUpModel } from 'src/app/models/SignUpModel';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form =new SignUpModel();
  isSubmitted=false;
  userData : any[]=[];
  temp="";
  i=1;
  submit()
  {
    localStorage.setItem("0"+this.i,JSON.stringify(this.form));
    this.i++;
  }
  clicked()
  {
      this.isSubmitted=true;
  }

}
