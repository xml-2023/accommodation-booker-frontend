import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGuestComponent } from './profile-guest.component';

describe('ProfileGuestComponent', () => {
  let component: ProfileGuestComponent;
  let fixture: ComponentFixture<ProfileGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
