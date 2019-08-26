import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})

@Injectable()
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
