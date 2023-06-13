import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AccommodationCreateComponent } from './accommodation-create/accommodation-create.component';
import { AccommodationSearchComponent } from './accommodation-search/accommodation-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegistrationComponent } from './registration/registration.component';
import { HostSidebarComponent } from './host-sidebar/host-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AccommodationsOfHostComponent } from './accommodations-of-host/accommodations-of-host.component';
import { CreateAvailabilityComponent } from './create-availability/create-availability.component';
import { AvailabilityListByAccommodationComponent } from './availability-list-by-accommodation/availability-list-by-accommodation.component';
import { EditAvailabilityComponent } from './edit-availability/edit-availability.component';
import { ViewReservationRequestsComponent } from './view-reservation-requests/view-reservation-requests.component';
import { GuestSidebarComponent } from './guest-sidebar/guest-sidebar.component';
import { GuestsReservationsComponent } from './guests-reservations/guests-reservations.component';
import { GuestSearchAccommodationComponent } from './guest-search-accommodation/guest-search-accommodation.component';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { ProfileHostComponent } from './profile-host/profile-host.component';
import { ProfileGuestComponent } from './profile-guest/profile-guest.component';
import { RateAccommodationComponent } from './rate-accommodation/rate-accommodation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationCreateComponent,
    AccommodationSearchComponent,
    HomePageComponent,
    SignInComponent,
    RegistrationComponent,
    HostSidebarComponent,
    ImageUploadComponent,
    AccommodationsOfHostComponent,
    CreateAvailabilityComponent,
    AvailabilityListByAccommodationComponent,
    EditAvailabilityComponent,
    ViewReservationRequestsComponent,
    GuestSidebarComponent,
    GuestsReservationsComponent,
    GuestSearchAccommodationComponent,
    AccommodationDetailsComponent,
    ProfileHostComponent,
    ProfileGuestComponent,
    RateAccommodationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
