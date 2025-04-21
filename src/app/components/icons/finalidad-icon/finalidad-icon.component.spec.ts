import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalidadIconComponent } from './finalidad-icon.component';

describe('FinalidadIconComponent', () => {
  let component: FinalidadIconComponent;
  let fixture: ComponentFixture<FinalidadIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalidadIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalidadIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
