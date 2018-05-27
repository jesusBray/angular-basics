import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOfUserComponent } from './date-of-user.component';

describe('DateOfUserComponent', () => {
  let component: DateOfUserComponent;
  let fixture: ComponentFixture<DateOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
