import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroBagIconComponent } from './euro-bag-icon.component';

describe('EuroBagIconComponent', () => {
  let component: EuroBagIconComponent;
  let fixture: ComponentFixture<EuroBagIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EuroBagIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuroBagIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
