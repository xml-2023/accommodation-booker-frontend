import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationCreateComponent } from './accommodation-create/accommodation-create.component';
import { AccommodationSearchComponent } from './accommodation-search/accommodation-search.component';
import { HostSidebarComponent } from './host-sidebar/host-sidebar.component';

const routes: Routes = [
  { path: 'host', component: HostSidebarComponent },
  { path: 'create-accommodation', component: AccommodationCreateComponent },
  { path: 'search-accommodation', component: AccommodationSearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
