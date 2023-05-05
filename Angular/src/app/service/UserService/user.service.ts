import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants/Constants';
import { LoggedInUserModel } from 'src/app/models/LoggedInUserModel';
import { SignUpModel } from 'src/app/models/SignUpModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserDetails(email: string) {
    return this.http.get<LoggedInUserModel>(Constants.api+"/user/email/"+email);
  }
  checkUser(form: any) {
    return  this.http.post(Constants.api+"/authenticate",form.serialize);
  }

  constructor(private http: HttpClient) { }
  registerUser(form: SignUpModel)
  {
      return this.http.post(Constants.api+"/register",form.serialize);   
  }
}

