import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public api: ApiService) { }

  selectState=false;
  
  initState: any = 'Signup';
  /* SignUp fields*/
  FirstName: any;
  LastName: any;
  Email: any;
  password: any;
  confirmPassword: any;
  privacyCheck = false;

  Age: any;
  BloodType: any;
  Gender: any;
  Phone_number:any;
  City: any;
  Zipcode: any;
  State: any;
  json: any;


  bloodGroup = [{ bg: 'A+', value: 'A+' }, { bg: 'B+', value: 'B+' }, { bg: 'A-', value: 'A-' }, { bg: 'B-', value: 'B-' }, { bg: 'O-', value: 'O-' }, { bg: 'O+', value: 'O+' }, { bg: 'AB+', value: 'AB+' }, { bg: 'AB-', value: 'AB-' }, { bg: 'unknown', value: 'UnKnown' }];

  GenderGroup = [{ Value: "Male", Name: "Male" }, { Value: "Female", Name: "Female" }, { Value: "Others", Name: "Others" }]

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
  }

  clickBlood(bloodtype: any) {
    this.BloodType = bloodtype;
    console.log(this.BloodType);
  }

  clickGender(Gender: any) {
    this.Gender = Gender;
    console.log(this.Gender);
  }

  changeState(State: any) {
    this.initState = State
  }


  signUp() {
    this.api.userSignObj = {};
    this.api.userSignObj.FirstName = this.FirstName;
    this.api.userSignObj.LastName = this.LastName;
    this.api.userSignObj.Email = this.Email;
    this.api.userSignObj.password = this.password;
    this.api.userSignObj.Age = this.Age;
    this.api.userSignObj.BloodType = this.BloodType;
    this.api.userSignObj.Gender = this.Gender;
    this.api.userSignObj.Phone_number = this.Phone_number;
    this.api.userSignObj.City = this.City;
    this.api.userSignObj.Zipcode =this.Zipcode;
    this.api.userSignObj.State = this.State;
    this.api.userSignObj.RoleType = "newUser";
    this.api.userSignObj.LocationNotification=true;
    this.api.userSignObj.FamilyShare = false;
    this.api.signUpUser();
  }

}
