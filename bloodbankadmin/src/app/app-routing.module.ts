import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { DrivesComponent } from './drives/drives.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path:'Home', component:HomeComponent },
  { path:'members' ,component:MembersComponent},
  { path:'organizations' ,component:OrganizationsComponent},
  {path:'campDeatils/:id',component:CampDetailsComponent},
  { path:'drives', component:DrivesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
