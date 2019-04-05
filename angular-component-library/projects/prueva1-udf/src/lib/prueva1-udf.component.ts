import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UdfDefinition } from './udf-definition';
import { UdfValue } from './udf-value';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'lib-PRUEVA1-UDF',
  template: 
  `
    <div [formGroup]="udfFormGroup" class="container">
      <div formArrayName="udfFormArray">
        <div *ngFor="let group of udfFormArray.controls; let i=index" [formGroupName]="i" [ngSwitch]="udfData[i].custom_field.type">

          <mat-form-field *ngSwitchCase="'TEXT'" class="item-udf">
            <input type="text" matInput formControlName="value" placeholder="{{group.value.name}}">
          </mat-form-field>

          <mat-form-field *ngSwitchCase="'NUMBER'" class="item-udf">
            <input type="number" matInput formControlName="value" placeholder="{{group.value.name}}">
          </mat-form-field>

          <mat-form-field *ngSwitchCase="'ANY_TEXT'" class="item-udf"> 
            <textarea matInput formControlName="value" placeholder="{{group.value.name}}"></textarea> 
          </mat-form-field> 

          <mat-form-field *ngSwitchCase="'LIST_OF_VALUES'" class="item-udf">
            <mat-select formControlName="value" placeholder="{{group.value.name}}">
              <mat-option *ngFor="let option of udfData[i].custom_field.options" [value]="option" for="option">
                {{option}}
              </mat-option>
            </mat-select>
          </mat-form-field>

          <mat-slide-toggle *ngSwitchCase="'YES_OR_NO'" color="primary" formControlName="value" class="item-udf">
            {{group.value.name}}
          </mat-slide-toggle>
        
          <mat-form-field *ngSwitchCase="'DATE'" appearance="outline" class="item-udf">
            <input matInput [matDatepicker]="picker" placeholder="{{group.value.name}}" formControlName="value">
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker touchUi #picker></mat-datepicker>
          </mat-form-field>

          <mat-form-field *ngSwitchCase="'MULTI_SELECT'" class="item-udf">
            <mat-chip-list #chipList>
              <mat-chip
                *ngFor="let fruit of fruits"
                [selectable]="selectable"
                [removable]="removable"
                (removed)="remove(fruit)">
                {{fruit}}
                <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
              </mat-chip>
              <input
                placeholder="{{group.value.name}}"
                #fruitInput
                [formControl]="fruitCtrl"
                [matAutocomplete]="auto"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
                [matChipInputAddOnBlur]="addOnBlur"
                (matChipInputTokenEnd)="add($event)">
            </mat-chip-list>
            <mat-autocomplete #auto="matAutocomplete" (optionSelected)="selected($event)">
              <mat-option *ngFor="let fruit of filteredFruits | async" [value]="fruit">
                {{fruit}}
              </mat-option>
            </mat-autocomplete>
          </mat-form-field>
        </div>
      </div>
    </div>
  `,
  styles: [
  `
    .container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .item-udf {
        width: 100%;
    }

    mat-slide-toggle {
        margin: 10px;
    }

    .example-margin {
        margin: 0 10px;
    }
  `
  ]
})
export class PRUEVA1UDFComponent implements OnInit {
  public udfFormArray = this.fb.array([]);
  @Input() public udfData: UdfDefinition[];
  @Input() public udfFormGroup: FormGroup;

  //chips
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private fb: FormBuilder) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit() {
    this.udfFormGroup.addControl('udfFormArray', this.udfFormArray);
    this.udfData.forEach((data) => {
      this.udfFormArray.push(this.fb.group(
        {
          name: data.custom_field.name,
          value: data.custom_field.default_value
        } as UdfValue
      ));
    });
  }

  add(event: MatChipInputEvent): void {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }
}
