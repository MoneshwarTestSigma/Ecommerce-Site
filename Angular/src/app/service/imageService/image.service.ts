import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Constants } from 'src/app/constants/Constants';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private httpClient: HttpClient,private cookieService:CookieService) { }
  private token:string = "Bearer "+this.cookieService.get("JWT");

  private headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods','*')
    .set('Access-Control-Allow-Headers','*')
    .set('Authorization',this.token)
  ;
  public baseUrl = `${Constants.api}/images`;
  public uploadImage(formData: FormData,id:Number): Observable<any> {
  const file = formData.get('file') as File;
  const url = this.baseUrl + `?file=${file.name}&id=${id}`;
  return this.httpClient.post(url, formData , {headers:this.headers});
  }
}
