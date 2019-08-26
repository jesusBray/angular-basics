import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http:HttpClient) { 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;


  }
  private url = 'http://localhost';
  public token: string;

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post<any>(this.url, { username: username, password: password })
  //     .pipe(map(user => {
  //       // login bem-sucedido se houver um token jwt na resposta
  //       if (user && user.token) {
  //         // armazenar detalhes do usuário e token jwt no localStorage para manter o usuário logado entre as atualizações da página
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //       }

  //       return user;
  //       })
  //   );
  // }
  
  
}
