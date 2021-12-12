import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {


  status = 'AppointmentsHistory';
  btn: any;
  stateChange(status: any) {
    this.status = status;
  }

  constructor(public api:ApiService) { }

  ngOnInit(): void {

    this.api.getUserDetails();
    this.api.getAppointments();
    this.api.getAppointmentHistory();
    this.api.getDonationHistory();
    this.api.getfamilyShare();
  }

}
