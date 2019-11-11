import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
_url='https://my-json-server.typicode.com/typicode/demo/posts';
  constructor(private http:HttpClient) { }

  enroll(registerForm):Observable<any>{
   return this.http.post(this._url,registerForm); 
  }
}


// loginDetails(loginData):Observable<any>{
//   console.log(loginData);
//      return this.http.post("/url",loginData);
//    }