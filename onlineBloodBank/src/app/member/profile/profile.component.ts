import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public api:ApiService) { }
  
  status = 'Appointments';
  btn: any;
  textSearch:any;
  stateChange(status: any) {
    this.status = status;
  }
  ngOnInit(): void {
    this.api.getUserDetails();
    this.api.getAppointmentHistory();
    this.api.getDonationHistory();
    this.api.getfamilyMember();
    this.api.getAllUser();
    this.api.getCampDetails();
  }

  async userSearch(){
    if(this.textSearch==""){
      this.api.getAllUser();
      this.api.userSearchElement=false;
    }else{
      this.api.userSearchText=this.textSearch;
      this.api.userSearch();
    }
  }

  async add(i:any){
    this.api.addMemberId=i;
    this.api.addMember();
  }

}
