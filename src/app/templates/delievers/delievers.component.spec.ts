import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelieversComponent } from './delievers.component';

describe('DelieversComponent', () => {
  let component: DelieversComponent;
  let fixture: ComponentFixture<DelieversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelieversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelieversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
