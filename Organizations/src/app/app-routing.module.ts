import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { DrivesComponent } from './drives/drives.component';
import { OrgMembersComponent } from './org-members/org-members.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path:'Login', component:LoginComponent },
  { path:'SignUp', component:SignupComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'appointments', component:AppointmentsComponent},
  { path:'members',component:MembersComponent},
  { path:'orgMember',component:OrgMembersComponent},
  { path:'drives',component:DrivesComponent},
  {path:'campDeatils/:id',component:CampDetailsComponent},
  {path:'bloodbank',component:BloodbankComponent},
  {path:'organization',component:OrganizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
