import { Observable, from } from 'rxjs';
import { MethodsCrudI } from '../models/methods-crud-i';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Routers } from '../components/routes/routers';
import { tap }from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiUserService implements MethodsCrudI{

  url = 'http://localhost:10301';
  constructor(private http:HttpClient,) { }

  getUser(user):Observable<any>{
    return this.http.post(`${this.url}/p1/login`,user);
  };

  getUsers():Observable<any>{
    return null;
  };

  login(user):Observable<any>{
    return this.http.post(`${this.url}/account`,user).pipe(tap())
  }


}
