import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  jwthelper = new JwtHelperService();
  constructor() {
  }

  emailFromToken(item:any) {
    if(item!=null)
     return this.jwthelper.decodeToken(item).sub;
     return 0;

  }
}
