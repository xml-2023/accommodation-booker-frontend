import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHostRatingsComponent } from './guest-host-ratings.component';

describe('GuestHostRatingsComponent', () => {
  let component: GuestHostRatingsComponent;
  let fixture: ComponentFixture<GuestHostRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestHostRatingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestHostRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
