import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-first-library',
  template: `
    <mat-toolbar color="primary">{{title}}</mat-toolbar>
  `,
  styles: []
})
export class MyFirstLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public title: string ='Libreria 1';
}
