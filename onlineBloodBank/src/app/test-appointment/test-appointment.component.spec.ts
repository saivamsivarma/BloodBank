import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppointmentComponent } from './test-appointment.component';

describe('TestAppointmentComponent', () => {
  let component: TestAppointmentComponent;
  let fixture: ComponentFixture<TestAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
