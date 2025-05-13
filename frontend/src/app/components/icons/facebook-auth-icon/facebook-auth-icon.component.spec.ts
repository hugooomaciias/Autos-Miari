import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAuthIconComponent } from './facebook-auth-icon.component';

describe('FacebookAuthIconComponent', () => {
  let component: FacebookAuthIconComponent;
  let fixture: ComponentFixture<FacebookAuthIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacebookAuthIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookAuthIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
