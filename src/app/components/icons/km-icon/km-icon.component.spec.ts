import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmIconComponent } from './km-icon.component';

describe('KmIconComponent', () => {
  let component: KmIconComponent;
  let fixture: ComponentFixture<KmIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KmIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
