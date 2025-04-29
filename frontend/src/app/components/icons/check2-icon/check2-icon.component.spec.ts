import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Check2IconComponent } from './check2-icon.component';

describe('Check2IconComponent', () => {
  let component: Check2IconComponent;
  let fixture: ComponentFixture<Check2IconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Check2IconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Check2IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
