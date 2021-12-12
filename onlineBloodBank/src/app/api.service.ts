import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  googleLoginLoad=false;
  googleData:any;

  driveLoad = false;
  driveObj: any;

  isLoggedIn = false;
  user: any;

  userLoginObj: any;
  userLoginLoad = false;

  userSignObj: any;
  userSignupLoad = false;

  memberLoginLoad = false;
  memberLoginObj: any;

  userDetailsObj: any;
  userDetailsLoad = false;
  Role: any;
  uid: any;

  City: any;
  organizationCityLoad = false;
  organizationCityObj: any;

  State:any;
  organizationStateLoad=false;
  organizationStateObj:any;

  CampCity: any;
  CampCityLoad = false;
  CampCityObj: any;

  CampState:any;
  CampStateLoad=false;
  CampStateObj:any;


  getAppointmentsLoad = false;
  getAppointmentsObj: any;


  makeAppointmentLoad = false;
  makeAppointmentObj: any;
  appointmentDetails: any;

  getAppointmentHistoryLoad = false;
  getAppointmentHistoryObj: any;

  getDonationHistoryLoad = false;
  getDonationHistoryObj: any;

  familyMemberLoad: any;
  familyMemberObj: any;

  requestMemberLoad = false;
  requestMemberObj: any;

  pendingMemberLoad = false;
  pendingMemberObj: any;

  getOrganizationLoad = false;
  getOrganizationObj: any;

  getUsersLoad = false;
  getUsersObj: any;

  userSearchLoad = false;
  userSearchObj: any;
  userSearchText: any;
  userSearchElement = false;

  addMemberLoad = false;
  addMemberId: any;
  addMemberObj: any;

  acceptMemberLoad=false;
  acceptMemberId:any;
  acceptMemberObj:any;

  location:any;
  familyShare:any;

  registerDriveLoad=false
  registerDriveObj:any;
  campId:any;

  familyShareLoad=false;
  familyShareObj:any;

  userCampLoad=false;
  userCampObj:any;

  constructor(public http: HttpClient, public router: Router) { }
  async signInWithGoogle(){
    this.googleLoginLoad=true;
    await this.http.post(environment.api_host+"/user/GoogleLogin",this.userLoginObj).subscribe(res=>{
      this.user = JSON.stringify(res);
      localStorage.setItem('User', this.user);
      this.router.navigate(['Member']);
      this.googleLoginLoad=false;
    })
  }

  async getAllUser() {
    this.getUsersLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/user/allUsers/${this.user._id}`).subscribe(res => {
      this.getUsersObj = JSON.parse(JSON.stringify(res))
      console.log(this.getUsersObj)
      this.getUsersLoad = false;
    })
  }

  async signUpUser() {
    this.userSignupLoad = true;
    await this.http.post(environment.api_host + '/user/', this.userSignObj).subscribe(res => {
      this.user = JSON.stringify(res);
      localStorage.setItem('User', this.user);
      this.router.navigate(['Member']);
      this.userSignupLoad = false;
    }, err => {
      window.alert(err.error.message);
      this.userSignupLoad = false;
    }
    );
  }


  async getDrives() {
    this.driveLoad = true;
    await this.http.get(environment.api_host + '/drives/').subscribe(res => {
      this.driveObj = JSON.parse(JSON.stringify(res));
      console.log(this.driveObj);
      this.driveLoad = false;
    }, err => {
      console.log(err.error.message);
      this.driveLoad = false;
    })
  }

  async campRegister(){
    this.registerDriveLoad=true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.post(environment.api_host+`/drives/userRegister/${this.campId}`,this.user._id).subscribe(res=>{
      this.registerDriveObj = JSON.stringify(res);
      this.registerDriveLoad=false;
    },err=>{
      console.log(err.error.message);
      this.registerDriveLoad=false;
    })
  }

  async getCampDetails(){
    this.userCampLoad =true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host+`/drives/user/${this.user._id}`).subscribe(res=>{
      this.userCampObj = JSON.parse(JSON.stringify(res));
      console.log(this.userCampObj);
      this.userCampLoad= false;
    })
  }


  async Login() {
    this.isLoggedIn = true;
    this.userLoginLoad = true;
    console.log(this.userLoginObj);
    await this.http.post(environment.api_host + '/user/login', this.userLoginObj).subscribe(res => {
      this.user = JSON.stringify(res);
      localStorage.setItem('User', this.user);
      this.router.navigate(['Member']);
      this.isLoggedIn = true;
      this.memberLoginLoad = false;
    }, err => {
      console.log(err.error.message);
      this.userLoginLoad = false;
    });
  }

  async getUserDetails() {
    this.userDetailsLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    this.uid = this.user._id;
    await this.http.get(environment.api_host + `/user/${this.uid}`).subscribe(res => {
      this.userDetailsObj = JSON.parse(JSON.stringify(res));
      console.log(this.userDetailsObj);
      this.Role = this.userDetailsObj.roleType;
      this.userDetailsLoad = false;
    });
  }

  async getOrgnizationCity() {
    this.organizationCityLoad = true;
    this.City = JSON.parse(localStorage.getItem("User") || "{}");
    console.log(this.City.city);
    await this.http.get(environment.api_host + `/organization/city/${this.City.city}`).subscribe(res => {
      this.organizationCityObj = JSON.parse(JSON.stringify(res));
      console.log(this.organizationCityObj);
      this.organizationCityLoad = false;
    })
  }

  async getOrgnizationState() {
    this.organizationStateLoad = true;
    this.State = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/organization/State/${this.State.state}`).subscribe(res => {
      this.organizationStateObj = JSON.parse(JSON.stringify(res));
      console.log(this.organizationStateObj);
      this.organizationCityLoad = false;
    })
  }


  async getCampCity() {
    this.CampCityLoad = true;
    this.CampCity = JSON.parse(localStorage.getItem("User") || "{}");
    console.log(this.CampCity.city);
    await this.http.get(environment.api_host + `/drives/city/${this.CampCity.city}`).subscribe(res => {
      this.CampCityObj = JSON.parse(JSON.stringify(res));
      console.log(this.CampCityObj);
      this.CampCityLoad = false;
    })
  }

  async getCampState() {
    this.CampStateLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/drives/state/${this.user.state}`).subscribe(res => {
      this.CampStateObj = JSON.parse(JSON.stringify(res));
      console.log(this.CampStateObj);
      this.CampCityLoad = false;
    })
  }


  async makeAppointment() {
    this.makeAppointmentLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    this.makeAppointmentObj.UserId = this.user._id;
    this.makeAppointmentObj.User_details = this.user;
    console.log(this.makeAppointmentObj);
    await this.http.post(environment.api_host + '/appointments', this.makeAppointmentObj).subscribe(res => {
      this.appointmentDetails = JSON.stringify(res);
      if (this.Role === "Donor" || this.Role === "Member") {
        this.router.navigate(['Member/appointments']);
      }
      else {
        this.router.navigate(['Member']);
      }
      console.log(this.appointmentDetails);
      this.makeAppointmentLoad = false;
    }, err => {
      console.log(err.error.message);
      this.makeAppointmentLoad = false;
    })

  }



  async getAppointments() {
    this.getAppointmentsLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/appointments/userAppointments/${this.user._id}`).subscribe(res => {
      this.getAppointmentsObj = JSON.parse(JSON.stringify(res));
      console.log(this.getAppointmentsObj)
      this.getAppointmentsLoad = false;
    }, err => {
      console.log(err.error.message);
      this.makeAppointmentLoad = false;
    })
  }

  async getAppointmentHistory() {
    this.getAppointmentHistoryLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/appointments/userAppointmentHistory/${this.user._id}`).subscribe(res => {
      this.getAppointmentHistoryObj = JSON.parse(JSON.stringify(res));
      console.log(this.getAppointmentHistoryObj);
      this.getAppointmentHistoryLoad = false;
    })
  }


  async updateLocation(){
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    this.location=!this.user.locationNotification;
    await this.http.put(environment.api_host+`/user/location/${this.user._id}`,this.location).subscribe(res=>{
      this.user = JSON.stringify(res);
      localStorage.setItem('User', this.user);
    })
  }

  async updatefamilyShare(){
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    this.familyShare=!this.user.familyShare;
    await this.http.put(environment.api_host+`/user/familyShare/${this.user._id}`,this.familyShare).subscribe(res=>{
      this.user = JSON.stringify(res);
      localStorage.setItem('User', this.user);
      console.timeLog(this.user);
    })
  }

  async getDonationHistory() {
    this.getDonationHistoryLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/donation/${this.user._id}`).subscribe(res => {
      this.getDonationHistoryObj = JSON.parse(JSON.stringify(res));
      this.getDonationHistoryLoad = false;
    })
  }

  async getfamilyMember() {
    this.familyMemberLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/user/family_member/${this.user._id}`).subscribe(res => {
      this.familyMemberObj = JSON.parse(JSON.stringify(res));
      this.familyMemberLoad = false;
    })

  }

  async getRequest() {
    this.requestMemberLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/user/request_member/${this.user._id}`).subscribe(res => {
      this.requestMemberObj = JSON.parse(JSON.stringify(res));
      console.log(this.requestMemberObj)
      this.requestMemberLoad = false;
    })

  }


  async getPendingMember() {
    this.pendingMemberLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host + `/user/pending_member/${this.user._id}`).subscribe(res => {
      this.pendingMemberObj = JSON.parse(JSON.stringify(res));
      console.log(this.pendingMemberObj)
      this.pendingMemberLoad = false;
    })

  }


  async getAllOrgnization() {
    this.getOrganizationLoad = true;
    await this.http.get(environment.api_host + "/organization").subscribe(res => {
      this.getOrganizationObj = JSON.parse(JSON.stringify(res));
      this.getOrganizationLoad = false;
    })
  }

  async userSearch() {
    this.userSearchLoad = true;
    await this.http.get(environment.api_host + `/user/userSearch/${this.userSearchText}`).subscribe(res => {
      this.userSearchObj = JSON.parse(JSON.stringify(res));
      this.userSearchLoad = false;
      this.userSearchElement = true;
    })
  }

  async addMember() {
    this.addMemberLoad = true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.post(environment.api_host + `/user/Request/${this.user._id}`, this.addMemberId).subscribe(res => {
      this.userDetailsObj = JSON.stringify(res);
      this.addMemberLoad = false;
    })
  }

  async acceptMember(){
    this.acceptMemberLoad=true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.post(environment.api_host+`/user/accept/${this.user._id}`,this.acceptMemberId).subscribe(res=>{
      this.userDetailsObj= JSON.stringify(res);
      this.acceptMemberLoad=false;
    })
  }

  async getfamilyShare(){
    this.familyMemberLoad=true;
    this.user = JSON.parse(localStorage.getItem("User") || "{}");
    await this.http.get(environment.api_host+`/appointments/familyShare/${this.user._id}`).subscribe(res=>{
      this.familyMemberObj = JSON.parse(JSON.stringify(res));
      console.log(this.familyMemberObj[0].AppointmentHistory)
      this.familyMemberLoad=false;
    })
  }

  async Logout() {
    this.isLoggedIn = false;
    localStorage.setItem('User', 'null');
    localStorage.clear
    this.router.navigate(['/']);
  }
}
