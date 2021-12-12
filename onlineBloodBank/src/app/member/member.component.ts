import { Component, OnInit } from '@angular/core';
import { AlanService } from '../alan-ai.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(public api:ApiService,public voice:AlanService) { }


  ngOnInit(): void {
    this.api.getUserDetails();
    this.api.getAppointments();
    this.api.getRequest();
    this.api.getAllOrgnization();
    this.api.getAllUser();
     this.api.getPendingMember();
  }

}
