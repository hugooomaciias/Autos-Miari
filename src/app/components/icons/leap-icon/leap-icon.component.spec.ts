import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapIconComponent } from './leap-icon.component';

describe('LeapIconComponent', () => {
  let component: LeapIconComponent;
  let fixture: ComponentFixture<LeapIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeapIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeapIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
