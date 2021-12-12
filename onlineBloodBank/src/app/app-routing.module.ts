import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './member/dashboard/dashboard.component';
import { AppointmentsComponent } from './member/appointments/appointments.component';
import { ProfileComponent } from './member/profile/profile.component';
import { DrivesComponent } from './member/drives/drives.component';
import { TestAppointmentComponent } from './test-appointment/test-appointment.component';
import { MemberComponent } from './member/member.component';
const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'Member', component: MemberComponent, children: [
      { path:'',redirectTo:'dashboard',pathMatch:'full'},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'Profile', component: ProfileComponent },
      { path: 'Drives', component: DrivesComponent }
    ]
  },
  { path: 'testAppointments', component: TestAppointmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
