import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeOpenIconComponent } from './eye-open-icon.component';

describe('EyeOpenIconComponent', () => {
  let component: EyeOpenIconComponent;
  let fixture: ComponentFixture<EyeOpenIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyeOpenIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeOpenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
