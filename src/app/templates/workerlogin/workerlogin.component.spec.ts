import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerloginComponent } from './workerlogin.component';

describe('WorkerloginComponent', () => {
  let component: WorkerloginComponent;
  let fixture: ComponentFixture<WorkerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
