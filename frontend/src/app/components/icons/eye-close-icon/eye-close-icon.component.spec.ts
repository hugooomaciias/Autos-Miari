import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeCloseIconComponent } from './eye-close-icon.component';

describe('EyeCloseIconComponent', () => {
  let component: EyeCloseIconComponent;
  let fixture: ComponentFixture<EyeCloseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyeCloseIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeCloseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
