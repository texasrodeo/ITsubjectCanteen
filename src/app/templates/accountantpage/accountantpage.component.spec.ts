import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantpageComponent } from './accountantpage.component';

describe('AccountantpageComponent', () => {
  let component: AccountantpageComponent;
  let fixture: ComponentFixture<AccountantpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountantpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
