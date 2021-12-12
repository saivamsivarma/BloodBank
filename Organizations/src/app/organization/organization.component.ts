import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(public api:ApisService) { }

  ngOnInit(): void {
    this.api.getAllOrgnization();
  }


  async sendRequest(id:any){
    this.api.bloodRequestObj={};
  this.api.bloodRequestObj.Response_id=id;
    this.api.sendBloodRequest();
  }
}
