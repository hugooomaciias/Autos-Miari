import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardIconComponent } from './award-icon.component';

describe('AwardIconComponent', () => {
  let component: AwardIconComponent;
  let fixture: ComponentFixture<AwardIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
