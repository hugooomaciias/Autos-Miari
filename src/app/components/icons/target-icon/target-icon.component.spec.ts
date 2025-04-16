import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetIconComponent } from './target-icon.component';

describe('TargetIconComponent', () => {
  let component: TargetIconComponent;
  let fixture: ComponentFixture<TargetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
