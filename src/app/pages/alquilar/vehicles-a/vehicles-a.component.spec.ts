import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesAComponent } from './vehicles-a.component';

describe('VehiclesAComponent', () => {
  let component: VehiclesAComponent;
  let fixture: ComponentFixture<VehiclesAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclesAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
