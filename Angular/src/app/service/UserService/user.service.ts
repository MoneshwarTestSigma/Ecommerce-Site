import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggedInUserModel } from 'src/app/models/LoggedInUserModel';
import { SignUpModel } from 'src/app/models/SignUpModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserDetails(email: string) {
    return this.http.get<LoggedInUserModel>("http://localhost:8080/user/email/"+email);
  }
  checkUser(form: any) {
    return  this.http.post("http://localhost:8080/authenticate",form);
  }

  constructor(private http: HttpClient) { }
  registerUser(form: SignUpModel)
  {
  
      return this.http.post("http://localhost:8080/register",form);   
  }
}

