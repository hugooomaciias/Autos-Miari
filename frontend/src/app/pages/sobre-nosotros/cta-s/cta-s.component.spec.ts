import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaSComponent } from './cta-s.component';

describe('CtaSComponent', () => {
  let component: CtaSComponent;
  let fixture: ComponentFixture<CtaSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
