import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOffIconComponent } from './time-off-icon.component';

describe('TimeOffIconComponent', () => {
  let component: TimeOffIconComponent;
  let fixture: ComponentFixture<TimeOffIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeOffIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeOffIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
