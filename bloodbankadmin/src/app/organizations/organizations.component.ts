import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  LoadingState:any=true;

  interval:any;
  organization_Name:any;
  address:any;
  city:any;
  state:any;
  zipcode:any;
  status:any;

  viewState = 'All';
  btn: any;
  textSearch:any;
  stateChange(status: any) {
    this.viewState = status;
  }

  constructor(public api:ApisService) { }

  ngOnInit(): void {
    this.api.getOrg();
    this.api.getPendingOrg();
  }

  /*async getData(i:any){
    this.organization_Name=i.organization_Name;
    this.address=i.address;
    this.city=i.city;
    this.state=i.state;
    this.zipcode=i.zipcode;
    this.state=i.state;
    this.api.orgId=i._id;
    this.api.getOrgMember();
  }*/

  async Accept(i:any){
    this.api.updateStatusObj={};
    this.api.updateStatusObj._id=i._id;
    this.api.updateStatusObj.Status="Completed";
    this.api.update();
    this.ngOnInit();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
