import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationCreateComponent } from './accommodation-create/accommodation-create.component';
import { AccommodationSearchComponent } from './accommodation-search/accommodation-search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'create-accommodation', component: AccommodationCreateComponent },
  { path: 'search-accommodation', component: AccommodationSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
