import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationCreateComponent } from './accommodation-create/accommodation-create.component';
import { AccommodationSearchComponent } from './accommodation-search/accommodation-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { HostSidebarComponent } from './host-sidebar/host-sidebar.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AccommodationsOfHostComponent } from './accommodations-of-host/accommodations-of-host.component';
import { CreateAvailabilityComponent } from './create-availability/create-availability.component';
import { AvailabilityListByAccommodationComponent } from './availability-list-by-accommodation/availability-list-by-accommodation.component';
import { EditAvailabilityComponent } from './edit-availability/edit-availability.component';
import { ViewReservationRequestsComponent } from './view-reservation-requests/view-reservation-requests.component';
import { GuestSidebarComponent } from './guest-sidebar/guest-sidebar.component';
import { GuestsReservationsComponent } from './guests-reservations/guests-reservations.component';
import { GuestSearchAccommodationComponent } from './guest-search-accommodation/guest-search-accommodation.component';
import { RoleGuardService } from './service/role-guard.service';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { ProfileHostComponent } from './profile-host/profile-host.component';
import { ProfileGuestComponent } from './profile-guest/profile-guest.component';
import { RateAccommodationComponent } from './rate-accommodation/rate-accommodation.component';
import { RateHostComponent } from './rate-host/rate-host.component';
import { GuestHostRatingsComponent } from './guest-host-ratings/guest-host-ratings.component';
import { GuestAccommodationRatingsComponent } from './guest-accommodation-ratings/guest-accommodation-ratings.component';
import { EditHostRatingComponent } from './edit-host-rating/edit-host-rating.component';
import { EditAccommodationRatingComponent } from './edit-accommodation-rating/edit-accommodation-rating.component';
import { AllRatingsForAccommodationComponent } from './all-ratings-for-accommodation/all-ratings-for-accommodation.component';
import { AllRatingsForHostComponent } from './all-ratings-for-host/all-ratings-for-host.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'host',
    component: HostSidebarComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'create-accommodation',
    component: AccommodationCreateComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'search-accommodation',
    component: AccommodationSearchComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'image-upload',
    component: ImageUploadComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'my-accommodations',
    component: AccommodationsOfHostComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'create-availability/:id',
    component: CreateAvailabilityComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'view-availability/:id',
    component: AvailabilityListByAccommodationComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'edit-availability/:accId/:avaId',
    component: EditAvailabilityComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'view-reservations/:id',
    component: ViewReservationRequestsComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'guest',
    component: GuestSidebarComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'guests-reservations',
    component: GuestsReservationsComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'rate-accommodation/:accommodationName',
    component: RateAccommodationComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'rate-host/:accommodationName',
    component: RateHostComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'guest-host-ratings',
    component: GuestHostRatingsComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'guest-accommodation-ratings',
    component: GuestAccommodationRatingsComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'edit-host-rating/:hostGradeId',
    component: EditHostRatingComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'edit-accommodation-rating/:accommodationGradeId',
    component: EditAccommodationRatingComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'all-accommodation-ratings/:accommodationId',
    component: AllRatingsForAccommodationComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'all-host-ratings/:hostId',
    component: AllRatingsForHostComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'guest-search-accommodation',
    component: GuestSearchAccommodationComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
  {
    path: 'accommodation-details/:name',
    component: AccommodationDetailsComponent,
    // canActivate: [RoleGuardService],
    // data: { expectedRole:  'Guest' },
  },
  {
    path: 'profile-host',
    component: ProfileHostComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Host' },
  },
  {
    path: 'profile-guest',
    component: ProfileGuestComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
