import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAComponent } from './pagination-a.component';

describe('PaginationAComponent', () => {
  let component: PaginationAComponent;
  let fixture: ComponentFixture<PaginationAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
