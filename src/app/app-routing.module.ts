import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component'
import { ShowCareInfoComponent } from './pets/show-care-info/show-care-info.component';
import { ShowIndividualComponent } from './pets/show-individual/show-individual.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'pets', component:PetsComponent},
  {path:'pets/viewdetails/:id', component:ShowIndividualComponent},
  {path:'pets/viewdetails/:id/showcare', component:ShowCareInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
