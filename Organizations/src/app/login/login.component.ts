import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email:any;
  Password:any;


  constructor(public api:ApisService) { }

  ngOnInit(): void {
  }

  async Login(){
    this.api.userLoginObj={}
    this.api.userLoginObj.Email=this.Email;
    this.api.userLoginObj.Password =this.Password;
    this.api.Login();
  }

}
