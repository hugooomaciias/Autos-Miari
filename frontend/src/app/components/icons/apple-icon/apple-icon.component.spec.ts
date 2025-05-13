import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleIconComponent } from './apple-icon.component';

describe('AppleIconComponent', () => {
  let component: AppleIconComponent;
  let fixture: ComponentFixture<AppleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppleIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
