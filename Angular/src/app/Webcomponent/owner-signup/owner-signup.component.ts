import { Component } from '@angular/core';
import { SignupType } from '../datatypes/SignupType';
@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent {
  form : SignupType={
    email: '',
    password: '',
    name: ''
  }
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
