import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesRegistroComponent } from './botones-registro-h.component';

describe('BotonesRegistroComponent', () => {
  let component: BotonesRegistroComponent;
  let fixture: ComponentFixture<BotonesRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
