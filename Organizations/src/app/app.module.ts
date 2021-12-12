import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MembersComponent } from './members/members.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { DrivesComponent } from './drives/drives.component';
import { OrgMembersComponent } from './org-members/org-members.component';
import { CampDetailsComponent } from './camp-details/camp-details.component';
import { OrganizationComponent } from './organization/organization.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AppointmentsComponent,
    MembersComponent,
    NavbarComponent,
    SignupComponent,
    BloodbankComponent,
    DrivesComponent,
    OrgMembersComponent,
    CampDetailsComponent,
    OrganizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
