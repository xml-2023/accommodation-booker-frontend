import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAccommodationRatingsComponent } from './guest-accommodation-ratings.component';

describe('GuestAccommodationRatingsComponent', () => {
  let component: GuestAccommodationRatingsComponent;
  let fixture: ComponentFixture<GuestAccommodationRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestAccommodationRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestAccommodationRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
