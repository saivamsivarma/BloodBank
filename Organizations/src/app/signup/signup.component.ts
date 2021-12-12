import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  initState='Name';

  Organization_Name:any;
  Contactnumber:any;
  Email:any;
  Address:any;
  City:any;
  Zipcode:any;
  State:any;

  Member_Name:any;
  Contact:any;
  Role:any;
  Member_email:any;
  Password:any;

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

  constructor(public api:ApisService) { }

  ngOnInit(): void {
  }
  changeState(State:any){
    this.initState=State
  }

  async organization(){
    this.api.organizationObj={};
    this.api.organizationObj.Organization_Name=this.Organization_Name;
    this.api.organizationObj.ContactNumber=this.Contactnumber;
    this.api.organizationObj.Email=this.Email;
    this.api.organizationObj.Address = this.Address;
    this.api.organizationObj.City =this.City;
    this.api.organizationObj.Zipcode =this.Zipcode;
    this.api.organizationObj.State = this.State;
    this.api.organizationObj.Status ='Pending';
    this.api.createOrganization();
    this.initState='userDetails';
  }

  async AddMember(){
    this.api.createMemberObj={};
    this.api.createMemberObj.Member_Name =this.Member_Name;
    this.api.createMemberObj.Contact = this.Contact;
    this.api.createMemberObj.Role = this.Role;
    this.api.createMemberObj.Email = this.Member_email;
    this.api.createMemberObj.Password=this.Password
    this.api.createMember();
  }
}
