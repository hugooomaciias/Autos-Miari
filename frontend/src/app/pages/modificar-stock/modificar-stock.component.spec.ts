import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarStockComponent } from './modificar-stock.component';

describe('ModificarStockComponent', () => {
  let component: ModificarStockComponent;
  let fixture: ComponentFixture<ModificarStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
