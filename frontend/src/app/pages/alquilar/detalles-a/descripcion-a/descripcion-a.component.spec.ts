import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionAComponent } from './descripcion-a.component';

describe('DescripcionAComponent', () => {
  let component: DescripcionAComponent;
  let fixture: ComponentFixture<DescripcionAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescripcionAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescripcionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
