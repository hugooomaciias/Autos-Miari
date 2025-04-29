import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesCComponent } from './vehicles-c.component';

describe('VehiclesCComponent', () => {
  let component: VehiclesCComponent;
  let fixture: ComponentFixture<VehiclesCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
