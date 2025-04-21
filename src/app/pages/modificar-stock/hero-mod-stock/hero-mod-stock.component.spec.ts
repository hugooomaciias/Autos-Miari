import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroModStockComponent } from './hero-mod-stock.component';

describe('HeroModStockComponent', () => {
  let component: HeroModStockComponent;
  let fixture: ComponentFixture<HeroModStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroModStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroModStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
