import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public api:ApisService) { }
  email:any;
  password:any;

  signIn(){
    this.api.loginObj={};
    this.api.loginObj.Email=this.email;
    this.api.loginObj.Password=this.password
    this.api.Login()
  }

  ngOnInit(): void {
  }

}
