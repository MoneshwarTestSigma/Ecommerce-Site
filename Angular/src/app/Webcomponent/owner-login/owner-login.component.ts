import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginModel } from 'src/app/models/LoginModel';
import { UserService } from 'src/app/service/UserService/user.service';
@Component({
  selector: 'app-owner-login',
  templateUrl: './owner-login.component.html',
  styleUrls: ['./owner-login.component.css']
})
export class OwnerLoginComponent {
  constructor(private userService:UserService,private router:Router,private cookieService:CookieService){}
  loginStatus=false;
  isClicked=false;
   form=new LoginModel();
   change(){
      this.isClicked=true;
   }
   check(){
    this.userService.checkUser(this.form).subscribe((res:any)=>{
      if(res){
        alert("Logged in Successfully");
        this.router.navigate(['/']);
      }
    },(error)=>{
        alert("Invalid Credentials");
        this.router.navigate(['/login']);
    });
   }
}
