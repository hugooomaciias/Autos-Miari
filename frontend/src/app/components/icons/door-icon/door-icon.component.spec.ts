import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorIconComponent } from './door-icon.component';

describe('DoorIconComponent', () => {
  let component: DoorIconComponent;
  let fixture: ComponentFixture<DoorIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoorIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
