import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { ApiService } from 'src/app/api.service';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public api:ApiService,public authService:SocialAuthService) { }

  email:any;
  password:any;

  ngOnInit(): void {
    const options = {
      strings: [', Give Life.', ', give now, give often.', '—stay healthy.'],
      typeSpeed: 60,
      backSpeed: 60,
      showCursor: true,
      loop: true
  };
    const typed = new Typed('.typed-element', options);
  }
  async login() {
    this.api.userLoginObj={};
    this.api.userLoginObj.email= this.email;
    this.api.userLoginObj.password = this.password;
    this.api.Login();
  }

  async signInWithGoogle(){
    this.api.userLoginObj={}
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data)=>{
      this.api.userLoginObj.email=data.email;
      this.api.signInWithGoogle();
    }) 
  }

}
