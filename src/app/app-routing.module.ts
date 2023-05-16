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
    path: 'guest-search-accommodation',
    component: GuestSearchAccommodationComponent,
    canActivate: [RoleGuardService],
    data: { expectedRole: 'Guest' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
