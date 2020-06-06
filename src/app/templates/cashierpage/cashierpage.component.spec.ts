import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashierpageComponent } from './cashierpage.component';

describe('CashierpageComponent', () => {
  let component: CashierpageComponent;
  let fixture: ComponentFixture<CashierpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashierpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashierpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
