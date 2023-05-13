import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccommodationCreateComponent } from './accommodation-create/accommodation-create.component';
import { AccommodationSearchComponent } from './accommodation-search/accommodation-search.component';
import { HostSidebarComponent } from './host-sidebar/host-sidebar.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

const routes: Routes = [
  { path: 'host', component: HostSidebarComponent },
  { path: 'create-accommodation', component: AccommodationCreateComponent },
  { path: 'search-accommodation', component: AccommodationSearchComponent },
  { path: 'image-upload', component: ImageUploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
