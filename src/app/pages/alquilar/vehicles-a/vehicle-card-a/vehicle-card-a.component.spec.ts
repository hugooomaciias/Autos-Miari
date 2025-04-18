import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardAComponent } from './vehicle-card-a.component';

describe('VehicleCardAComponent', () => {
  let component: VehicleCardAComponent;
  let fixture: ComponentFixture<VehicleCardAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCardAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCardAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
