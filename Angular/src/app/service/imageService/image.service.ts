import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private httpClient: HttpClient) { }
  public baseUrl = 'http://localhost:8080/api/images';
  public uploadImage(formData: FormData,id:Number): Observable<any> {
  const file = formData.get('file') as File;
  const url = this.baseUrl + `/upload?file=${file.name}&id=${id}`;
  return this.httpClient.post(url, formData , {responseType: 'text'});
  }
}
