import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

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
  familyMembers:any=[];


  constructor(public api:ApisService) { }

  ngOnInit(): void {
    this.api.getUsers();
  }


  async getDetails(id:any){
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

    this.familyMembers=id.familyMembers;
    this.api.memberId=id._id;
    this.api.getMemberFamily();
   }

}
