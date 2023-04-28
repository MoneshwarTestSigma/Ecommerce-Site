import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { UserService } from 'src/app/service/UserService/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService:UserService,private router:Router){}
  loginStatus=false;
  isClicked=false;
   form=new LoginModel();
   change()
   {
      this.isClicked=true;
   }
   check()
   {
    
      this.userService.checkUser(this.form).subscribe((res:any)=>{
        
        
        if(res)
        {
          alert("Logged in Successfully");
          localStorage.setItem("JWT",res.token);
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['/']);
        }          
      },(error)=>{
          alert("Invalid Credentials");
          this.router.navigate(['/login']);
      });
     
      
      
   }

}
