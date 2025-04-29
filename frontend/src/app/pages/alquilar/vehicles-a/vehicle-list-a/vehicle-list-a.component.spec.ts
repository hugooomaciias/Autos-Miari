import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListAComponent } from './vehicle-list-a.component';

describe('VehicleListAComponent', () => {
  let component: VehicleListAComponent;
  let fixture: ComponentFixture<VehicleListAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleListAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleListAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
