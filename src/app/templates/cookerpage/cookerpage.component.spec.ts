import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookerpageComponent } from './cookerpage.component';

describe('CookerpageComponent', () => {
  let component: CookerpageComponent;
  let fixture: ComponentFixture<CookerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
