import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarStartComponent } from './calendar-start.component';

describe('CalendarStartComponent', () => {
  let component: CalendarStartComponent;
  let fixture: ComponentFixture<CalendarStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarStartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
