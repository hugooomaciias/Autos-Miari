import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaVComponent } from './cta-v.component';

describe('CtaVComponent', () => {
  let component: CtaVComponent;
  let fixture: ComponentFixture<CtaVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
