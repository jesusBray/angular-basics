import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyFirstLibraryComponent } from './my-first-library.component';

describe('MyFirstLibraryComponent', () => {
  let component: MyFirstLibraryComponent;
  let fixture: ComponentFixture<MyFirstLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstLibraryComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
