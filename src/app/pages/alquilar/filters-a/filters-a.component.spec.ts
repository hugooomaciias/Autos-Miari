import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersAComponent } from './filters-a.component';

describe('FiltersAComponent', () => {
  let component: FiltersAComponent;
  let fixture: ComponentFixture<FiltersAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltersAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
