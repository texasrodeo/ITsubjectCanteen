import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddelieveryComponent } from './adddelievery.component';

describe('AdddelieveryComponent', () => {
  let component: AdddelieveryComponent;
  let fixture: ComponentFixture<AdddelieveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddelieveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddelieveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
