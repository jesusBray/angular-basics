import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPanelComponent } from './child-panel.component';

describe('ChildPanelComponent', () => {
  let component: ChildPanelComponent;
  let fixture: ComponentFixture<ChildPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
