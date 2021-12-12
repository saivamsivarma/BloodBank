import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Bloodtype:any[]=[{name:"A+",value:"200"},{name:"AB+",value:"300"},{name:"B+",value:"400"}]

  constructor(public api:ApisService) {}

  ngOnInit(): void {
    this.api.getMemberDetails();
    this.api.OrganizationDetails();
    this.api.getBloodbank();
    this.api.getAllOrgMembers();
    this.api.getAllOrgDrives();
    this.api.getOrganizationAppointment();
  }

  animations:boolean=true;
  postion:any="below";

  async Logout(){
    this.api.Logout();
  }

}
