import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationsOfHostComponent } from './accommodations-of-host.component';

describe('AccommodationsOfHostComponent', () => {
  let component: AccommodationsOfHostComponent;
  let fixture: ComponentFixture<AccommodationsOfHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationsOfHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationsOfHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
