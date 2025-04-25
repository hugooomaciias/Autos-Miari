import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarEndComponent } from './calendar-end.component';

describe('CalendarEndComponent', () => {
  let component: CalendarEndComponent;
  let fixture: ComponentFixture<CalendarEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
