import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})
export class DrivesComponent implements OnInit {

  constructor(public api:ApisService,public router:Router) { }
  Drive_Name:any;
  sameAddress=false;
  Address:any;
  City:any;
  Zipcode:any;
  State=null;
  Drive_Date:any;
  interval:any

  stateOptions = [{
    Value: "AL", Name: "Alabama"
  },
  {
    Value: "AK", Name: "Alaska"
  },
  {
    Value: "AZ", Name: "Arizona"
  },
  {
    Value: "AR", Name: "Arkansas"
  },
  {
    Value: "CA", Name: "California"
  },
  {
    Value: "CO", Name: "Colorado"
  },
  {
    Value: "CT", Name: "Connecticut"
  },
  {
    Value: "DE", Name: "Delaware"
  },
  {
    Value: "DC", Name: "District Of Columbia"
  },
  {
    Value: "FL", Name: "Florida"
  },
  {
    Value: "GA", Name: "Georgia"
  },
  {
    Value: "HI", Name: "Hawaii"
  },
  {
    Value: "ID", Name: "Idaho"
  },
  {
    Value: "IL", Name: "Illinois"
  },
  {
    Value: "IN", Name: "Indiana"
  }, {
    Value: "IA", Name: "Iowa"
  }, {
    Value: "KS", Name: "Kansas"
  }, {
    Value: "KY", Name: "Kentucky"
  }, {
    Value: "LA", Name: "Louisiana"
  }, {
    Value: "ME", Name: "Maine"
  }, {
    Value: "MD", Name: "Maryland"
  }, {
    Value: "MA", Name: "Massachusetts"
  }, {
    Value: "MI", Name: "Michigan"
  }, {
    Value: "MN", Name: "Minnesota"
  }, {
    Value: "MS", Name: "Mississippi"
  }, {
    Value: "MO", Name: "Missouri"
  }, {
    Value: "MT", Name: "Montana"
  }, {
    Value: "NE", Name: "Nebraska"
  }, {
    Value: "NV", Name: "Nevada"
  }, {
    Value: "NH", Name: "New Hampshire"
  }, {
    Value: "NJ", Name: "New Jersey"
  }, {
    Value: "NM", Name: "New Mexico"
  }, {
    Value: "NY", Name: "New York"
  }, {
    Value: "NC", Name: "North Carolina"
  }, {
    Value: "ND", Name: "North Dakota"
  }, {
    Value: "OH", Name: "Ohio"
  }, {
    Value: "OK", Name: "Oklahoma"
  }, {
    Value: "OR", Name: "Oregon"
  }, {
    Value: "PA", Name: "Pennsylvania"
  }, {
    Value: "RI", Name: "Rhode Island"
  }, {
    Value: "SC", Name: "South Carolina"
  }, {
    Value: "SD", Name: "South Dakota"
  }, {
    Value: "TX", Name: "Texas"
  }, {
    Value: "UT", Name: "Utah"
  }, {
    Value: "VT", Name: "Vermont"
  }, {
    Value: "VA", Name: "Virginia"
  }, {
    Value: "WA", Name: "Washington"
  }, {
    Value: "WV", Name: "West Virginia"
  }, {
    Value: "WI", Name: "Wisconsin"
  }, {
    Value: "WY", Name: "Wyoming"
  },
  ]

  ngOnInit(): void {
    this.api.getAllOrgDrives();
    this.api.getorganizationDetails();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  async checked(){
    this.sameAddress=!this.sameAddress;
    if(this.sameAddress===true){
      this.Address=this.api.organizationDetails.address;
      this.City = this.api.organizationDetails.city;
      this.Zipcode = this.api.organizationDetails.zipcode;
      this.State = this.api.organizationDetails.state;
    }
    else{
      this.Address="";
      this.City = "";
      this.Zipcode = "";
      this.State = null;
    }
    
  }

  async createCamp(){
    this.api.createDrive={};
    this.api.createDrive.Drive_Name=this.Drive_Name;
    this.api.createDrive.Address=this.Address;
    this.api.createDrive.City=this.City;
    this.api.createDrive.State = this.State;
    this.api.createDrive.Zipcode=this.Zipcode;
    this.api.createDrive.Drive_Date=this.Drive_Date;
    this.api.createDrive.Drive_Status="upcoming"
    this.api.createCamp();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 2000);
  }

  async campDetails(id:any){
    this.router.navigate(['/campDeatils',id])
  }


}
