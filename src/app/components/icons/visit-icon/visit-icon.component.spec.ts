import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitIconComponent } from './visit-icon.component';

describe('VisitIconComponent', () => {
  let component: VisitIconComponent;
  let fixture: ComponentFixture<VisitIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
