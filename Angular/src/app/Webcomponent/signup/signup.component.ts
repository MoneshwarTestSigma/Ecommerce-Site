import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpModel } from 'src/app/models/SignUpModel';
import { UserService } from 'src/app/service/UserService/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private userService:UserService,private router:Router){}
  form =new SignUpModel();
  isSubmitted=false;
  userData : any[]=[];
  password1="";
  i=1;
  submit(){
      this.form.type="USER";
      this.userService.registerUser(this.form).subscribe((res:any)=>{
      });
      alert("Registered Successfully");
        this.router.navigate(['/login'])
  }

}
