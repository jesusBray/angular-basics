import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PRUEVA1UDFComponent } from './prueva1-udf.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';

import { UdfDefinition } from './udf-definition';
import { UdfValue } from './udf-value';

describe('PRUEVA1UDFComponent', () => {
  let component: PRUEVA1UDFComponent;
  let fixture: ComponentFixture<PRUEVA1UDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PRUEVA1UDFComponent,
       ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        COMMA,
        ENTER,
        ElementRef,
        ViewChild,
      ],
      providers: [

      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRUEVA1UDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
