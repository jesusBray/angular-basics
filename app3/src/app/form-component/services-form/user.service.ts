import { Injectable } from '@angular/core';
import { FormComponentComponent } from '../form-component.component';
import { Observable , of, throwError} from 'rxjs';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string = 'https://exampleapp1-a88d0.firebaseio.com/';
  constructor(
    private service:FormComponentComponent,
    private http: HttpClient,
  ) { };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };

  // addUser(user):Observable<any>{
  //   console.log(user);
  //   return this.http.post<any>(this.url,user,this.httpOptions).pipe(
  //     catchError(this.handleError)
  //   );;
  // }

  getUser():Observable<any> {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUsers() {
    return this.http.get<FormComponentComponent[]>(this.url);
  }

  addUser(formJon): Observable<any>{
    return this.http.post(this.url, formJon);
  }
  




}
