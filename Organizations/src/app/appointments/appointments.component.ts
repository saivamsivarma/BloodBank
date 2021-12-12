import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  textSearch:any;
  interval:any;
  data:any;
  Status:any;
  Name:any;
  Unit:any;

  constructor(public api:ApisService) { }

  ngOnInit(): void {
    this.api.getOrganizationAppointment();
  }

  async delete(i:any){
    this.api.AppointmentId=i;
    console.log(this.api.AppointmentId);
    this.api.deleteAppointment();
    this.interval=setInterval(() => {
      this.ngOnInit(); 
      this.ngOnDestroy();
      }, 3000);
  }

  async updateAppointment(i:any){
    this.api.updateAppointmentValue={};
    this.api.updateAppointmentValue._id=i;
    this.api.updateAppointmentValue.Appointment_Status="Verification";
    console.log(this.api.updateAppointmentValue);
    this.api.updateAppointment();
     this.interval=setInterval(() => {
      this.ngOnInit(); 
      this.ngOnDestroy();
      }, 1000);
  }

  async updateMember(i:any,role:any){
    this.api.updateMemberValue={};
    this.api.updateMemberValue.AppointmentId=i._id;
    this.api.updateMemberValue.UserId=i.userId;
    this.api.updateMemberValue.OrganizationId=i.organizationId;
    this.api.updateMemberValue.OrganizationName=i.organization_details.organization_Name;
    this.api.updateMemberValue.Feedback="Became a "+role;
    this.api.updateMemberRole=role;
    console.log(this.api.updateMemberValue)
    this.api.updateMemberAndAppointment();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 1000);
      
  }

  async getDonationData(i:any,Status:any){
    this.data={}
    this.data=i;
    this.Name=i.user_details.firstName;
    this.Status=Status;
    console.log(this.data+""+this.Status);
  }

  async updateDonor(){
    this.api.updateDonorObj={};
    this.api.updateDonorObj.UserId=this.data.userId;
    this.api.updateDonorObj.OrganizationName=this.data.organization_details.organization_Name;
    this.api.updateDonorObj.AppointmentId=this.data._id;
    this.api.updateDonorObj.Status=this.Status;
    this.api.updateDonorObj.Unit=this.Unit;
    console.log(this.api.updateDonorObj);
   this.api.updateDonorAppointment();
   this.interval=setInterval(() => {
    this.ngOnInit();
    this.ngOnDestroy(); 
    }, 1000);
  }


  async Search(){
    if(this.textSearch==""){
      this.ngOnInit();
      this.api.searchElement=false;
    }else{
      this.api.searchAppointment=this.textSearch
      this.api.search();
    }
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
