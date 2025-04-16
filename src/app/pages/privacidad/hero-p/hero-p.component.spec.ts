import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPComponent } from './hero-p.component';

describe('HeroPComponent', () => {
  let component: HeroPComponent;
  let fixture: ComponentFixture<HeroPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
