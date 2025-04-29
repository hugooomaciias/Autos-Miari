import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Car3IconComponent } from './car3-icon.component';

describe('Car3IconComponent', () => {
  let component: Car3IconComponent;
  let fixture: ComponentFixture<Car3IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Car3IconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Car3IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
