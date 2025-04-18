import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDComponent } from './header-c.component';

describe('HeaderDComponent', () => {
  let component: HeaderDComponent;
  let fixture: ComponentFixture<HeaderDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
