import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
  }

  @Input() user: string;
  @Input() pass: string;
  
  
  
}
