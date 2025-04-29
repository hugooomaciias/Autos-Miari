import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelIconComponent } from './fuel-icon.component';

describe('FuelIconComponent', () => {
  let component: FuelIconComponent;
  let fixture: ComponentFixture<FuelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
