import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpModel } from 'src/app/models/SignUpModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkUser(form: any) {
    return  this.http.post<any>("http://localhost:8080/user/login",form);
  }

  constructor(private http: HttpClient) { }
  registerUser(form: SignUpModel)
  {
     return  this.http.post<any>("http://localhost:8080/user",form);
  }
}

