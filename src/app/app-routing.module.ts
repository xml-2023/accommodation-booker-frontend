import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationCreateComponent } from './accommodation-create/accommodation-create.component';
import { AccommodationSearchComponent } from './accommodation-search/accommodation-search.component';
import { HostSidebarComponent } from './host-sidebar/host-sidebar.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { AccommodationsOfHostComponent } from './accommodations-of-host/accommodations-of-host.component';
import { CreateAvailabilityComponent } from './create-availability/create-availability.component';
import { AvailabilityListByAccommodationComponent } from './availability-list-by-accommodation/availability-list-by-accommodation.component';
import { EditAvailabilityComponent } from './edit-availability/edit-availability.component';
import { ViewReservationRequestsComponent } from './view-reservation-requests/view-reservation-requests.component';

const routes: Routes = [
  { path: 'host', component: HostSidebarComponent },
  { path: 'create-accommodation', component: AccommodationCreateComponent },
  { path: 'search-accommodation', component: AccommodationSearchComponent },
  { path: 'image-upload', component: ImageUploadComponent},
  { path: 'my-accommodations', component: AccommodationsOfHostComponent},
  { path: 'create-availability/:id', component: CreateAvailabilityComponent},
  { path: 'view-availability/:id', component: AvailabilityListByAccommodationComponent},
  { path: 'edit-availability/:accId/:avaId', component: EditAvailabilityComponent},
  { path: 'view-reservations/:id', component: ViewReservationRequestsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
