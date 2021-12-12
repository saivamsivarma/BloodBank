import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  id:any;
  textSearch:any;
  firstName:any;
  lastName:any;
  BloodType:any;
  Age:any;
  Gender:any;
  Contact:any;
  Email:any;
  City:any;
  State:any;
  Zipcode:any;
  RoleType:any;
  Donations:any=[];

  constructor(public api:ApisService) { }

  ngOnInit(): void {
    this.api.getAllUser();
  }

  async userSearch(){
    if(this.textSearch==""){
      this.ngOnInit();
      this.api.userSearchElement=false;
    }else{
      this.api.userSearchText=this.textSearch;
      this.api.userSearch();
    }
  }

 async getDetails(id:any,donation:any){
  this.firstName=id.firstName;
  this.lastName=id.lastName;
  this.BloodType=id.bloodType;
  this.Age=id.age;
  this.Gender=id.gender;
  this.Contact=id.phone_number;
  this.Email = id.email;
  this.City =id.city;
  this.State=id.state;
  this.Zipcode=id.zipcode;
  this.RoleType=id.roleType;
   this.Donations=donation;
 }

 async sendRequest(id:any){
  console.log(id)
  this.api.bloodRequestObj={};
  this.api.bloodRequestObj.Response_id=id;
  this.api.sendBloodRequest();
 }

}
