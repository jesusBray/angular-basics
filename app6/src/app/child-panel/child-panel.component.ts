import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-panel',
  templateUrl: './child-panel.component.html',
  styleUrls: ['./child-panel.component.css']
})
export class ChildPanelComponent implements OnInit {

  constructor() { }
  private titulo:string='componente hijo';

  @Output() exampleOutput = new EventEmitter<string>();
  private value:string='dato';

  submitMessage() {
    this.exampleOutput.emit(this.value);
  }

  ngOnInit() {}
}
