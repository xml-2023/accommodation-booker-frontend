import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSearchAccommodationComponent } from './guest-search-accommodation.component';

describe('GuestSearchAccommodationComponent', () => {
  let component: GuestSearchAccommodationComponent;
  let fixture: ComponentFixture<GuestSearchAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSearchAccommodationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestSearchAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
