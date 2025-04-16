import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefCaseIconComponent } from './brief-case-icon.component';

describe('BriefCaseIconComponent', () => {
  let component: BriefCaseIconComponent;
  let fixture: ComponentFixture<BriefCaseIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefCaseIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefCaseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
