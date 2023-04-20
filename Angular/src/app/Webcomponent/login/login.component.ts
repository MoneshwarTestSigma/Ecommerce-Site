import { Component } from '@angular/core';
import { LoginType } from '../datatypes/LoginType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginStatus=false;
  isClicked=false;
   form: LoginType={
     email: '',
     password: ''
   };
   change()
   {
      this.isClicked=true;
   }
   check()
   {
    for(var key in localStorage) {
      let temp =JSON.parse(localStorage.getItem(key)|| "");
      if(temp.email==this.form.email && temp.password==this.form.password)
      {
        alert("Welcome  "+ temp.name);
        this.loginStatus= true;
        break;
      }      
   }
   }

}
