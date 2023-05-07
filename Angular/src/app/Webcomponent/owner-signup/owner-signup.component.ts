import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from 'src/app/models/SignUpModel';
import { UserService } from 'src/app/service/UserService/user.service';
@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css']
})
export class OwnerSignupComponent {
  constructor(private userService:UserService,private router:Router){}
  form =new SignUpModel();
  isSubmitted=false;
  userData : any[]=[];  
  password1=""
  submit()
  {
    this.form.type="ADMIN";
      this.userService.registerUser(this.form).subscribe((res:any)=>{
        
      });
      alert("Registered Successfully");
        this.router.navigate(['/login'])
  }
  clicked()
  {
      this.isSubmitted=true;
  }

}
