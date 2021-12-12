import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-test-appointment',
  templateUrl: './test-appointment.component.html',
  styleUrls: ['./test-appointment.component.css']
})
export class TestAppointmentComponent implements OnInit {

  constructor(public api:ApiService) { }

  TimeOptions = [{ Name: '8:00AM-8:45AM', value: '8:00AM-8:45AM' }, { Name: '9:00AM-9:45AM', value: '9:00AM-9:45AM' }, { Name: '10:00AM-10:45AM', value: '10:00AM-10:45AM' }, { Name: '11:00AM-11:45AM', value: '11:00AM-11:45AM' },{ Name: '12:00PM-12:45PM', value: '12:00PM-12:45PM' }, { Name: '01:00PM-01:45PM', value: '01:00PM-01:45PM' },{ Name: '02:00PM-02:45PM', value: '02:00PM-02:45PM' }, { Name: '03:00PM-03:45PM', value: '03:00PM-03:45PM' }, { Name: '04:00PM-04:45PM', value: '04:00PM-04:45PM' },];

  organization_id:any;
  organizationName:any;
  organizationAddress:any;
  organizationContact:any;

  Time=null;
  Appointment_date:any;
  Appointment_reason=null;


  ngOnInit(): void {
    this.api.getOrgnizationCity();
    this.api.getUserDetails();
    this.api.getOrgnizationState();
  }

  async getData(i:any){
    this.organization_id=i._id;
    this.organizationName=i.organization_Name;
    this.organizationAddress = i.address+", "+i.city+", "+i.state+", "+i.zipcode || "";
    this.organizationContact=i.contactNumber;
  }

  async makeAppointment(){
    console.log(this.organization_id);
    this.api.makeAppointmentObj={};
    this.api.makeAppointmentObj.Organization_details={};
    this.api.makeAppointmentObj.User_details={};
    this.api.makeAppointmentObj.OrganizationId=this.organization_id;
    this.api.makeAppointmentObj.Organization_details._id=this.organization_id;
    this.api.makeAppointmentObj.Organization_details.Organization_Name=this.organizationName;
    this.api.makeAppointmentObj.Organization_details.address=this.organizationAddress;
    this.api.makeAppointmentObj.Organization_details.ContactNumber = this.organizationContact;
    this.api.makeAppointmentObj.Appointment_date=this.Appointment_date;
    this.api.makeAppointmentObj.Time =this.Time;
    this.api.makeAppointmentObj.Appointment_reason=this.Appointment_reason;
    this.api.makeAppointmentObj.Appointment_Status="Confirmed";
    this.api.makeAppointment();
  }
  
}
