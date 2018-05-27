import { Component } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from "rxjs";
import { map } from 'rxjs/operators/';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sera este otro proyecto?';
  datos:string;
  datosIngresados:Array<any>;
  
  public constructor(private http:Http){
    this.datos ='https://jsonplaceholder.typicode.com/photos';
    
    this.http.get(this.datos).pipe(map(response => response.json())).subscribe(res => this.datosIngresados = res);
    
  }
}
