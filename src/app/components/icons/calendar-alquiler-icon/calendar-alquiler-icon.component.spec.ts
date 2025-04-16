import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAlquilerIconComponent } from './calendar-alquiler-icon.component';

describe('CalendarAlquilerIconComponent', () => {
  let component: CalendarAlquilerIconComponent;
  let fixture: ComponentFixture<CalendarAlquilerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarAlquilerIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarAlquilerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
