import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Time2IconComponent } from './time2-icon.component';

describe('Time2IconComponent', () => {
  let component: Time2IconComponent;
  let fixture: ComponentFixture<Time2IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Time2IconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Time2IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
