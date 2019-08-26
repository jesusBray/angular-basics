import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  private titulo:string='componente padre';
  private propertiRender:string;
  exampleDatOutput($event) {
    this.propertiRender= $event;
  }
  
}
