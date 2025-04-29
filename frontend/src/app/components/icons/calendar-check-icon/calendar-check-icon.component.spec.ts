import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarCheckIconComponent } from './calendar-check-icon.component';

describe('CalendarCheckIconComponent', () => {
  let component: CalendarCheckIconComponent;
  let fixture: ComponentFixture<CalendarCheckIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarCheckIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarCheckIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
