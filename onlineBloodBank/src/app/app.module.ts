import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './member/dashboard/dashboard.component';
import { AppointmentsComponent } from './member/appointments/appointments.component';
import { ProfileComponent } from './member/profile/profile.component';
import { DrivesComponent } from './member/drives/drives.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestAppointmentComponent } from './test-appointment/test-appointment.component';

import { QRCodeModule } from 'angularx-qrcode';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MemberComponent,
    NavbarComponent,
    DashboardComponent,
    AppointmentsComponent,
    ProfileComponent,
    DrivesComponent,
    LoginComponent,
    SignupComponent,
    TestAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    SocialLoginModule
  ],
  providers: [{
    provide:'SocialAuthServiceConfig',
    useValue:{
      autoLogin:false,
      providers:[
        {
          id:GoogleLoginProvider.PROVIDER_ID,
          provider:new GoogleLoginProvider(
            '176172489002-sjf0qea2aj6hht2ciop26g67tpahva9a.apps.googleusercontent.com'
          )
        }
      ]
    } as SocialAuthServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
