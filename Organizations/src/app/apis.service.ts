import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  orgId:any;

  userLoginLoad=false;
  userLoginObj:any;
  memberObj:any;
  member:any;

  isLoggedIn=false;

  organizationObj:any;
  organization:any;
  org:any;
  mid:any;
  Status:any;

  createMemberLoad=false;
  createMemberObj:any;
  Member:any;


  dashBoardLoad=false;
  getMember:any;
  organizationDetails:any;

  organizationAppointmentLoad=false;
  organizationAppointment:any;

  searchAppointmentLoad=false;
  searchAppointmentObj:any;
  searchAppointment:any;
  searchElement=false;

  userSearchLoad=false;
  userSearchObj:any;
  userSearchText:any;
  userSearchElement=false;

  userLoad=false;
  userObj:any;

  BloodBankLoad=false;
  BloodBankObj:any;
  BloodBank:any;

  getBloodbankLoad=false;
  getBloodBankObj:any;

  createOrgMemberLoad=false;
  createOrgMemberObj:any;
  OrgMemberObj:any;

  getOrgMemberLoad=false;
  getOrgMemberObj:any;

  createOrgDriveLoad=false;
  createOrgDriveObj:any;
  createOrgDrive:any;

  getOrgDriveLoad=false;
  getOrgDriveObj:any;

  deleteAppointmentLoad=false
  AppointmentId:any;

  updateAppointmentLoad=false;
  updateAppointmentObj:any;
  updateAppointmentValue:any;

  updateMemberLoad=false;
  updateMemberObj:any;
  updateMemberValue:any;
  updateMemberRole:any;

  updateDonorload=false;
  updateDonorObj:any;

  createDriveLoad=false;
  createDriveObj:any;
  createDrive:any;

  getDriveDetailsLoad=false;
  getDriveDetailsObj:any;


  uid:any;
  getUserDetailsLoad=false;
  getUserDetails:any;


  getUserDonationDetailsLoad=false;
  getUserDonationDetails:any;

  bloodRequestLoad=false;
  bloodRequestObj:any;
  bloodRequest:any;

  getOrganizationLoad=false;
  getOrganizationObj:any;

  constructor(public http: HttpClient, public router: Router) { }

  async createCamp(){
    this.createDriveLoad=true;
    this.org = localStorage.getItem('orgDetails');
    this.createDrive.Organized_id=this.org;
    console.log(this.createDrive);
    await this.http.post(environment.api_host+'/drives/',this.createDrive).subscribe(res=>{
      this.createDriveObj=JSON.stringify(res);
      this.createDriveLoad=false;
    })
  }

  async createOrganization() {
  
    await this.http.post(environment.api_host + '/organization', this.organizationObj).subscribe(res => {
      this.organization = JSON.parse(JSON.stringify(res));
      localStorage.setItem('orgDetails', this.organization._id);
      console.log(this.organization);
    }, err => {
      window.alert(err.error.message);
    }
    );
  }

  async createMember(){
    this.createMemberLoad=true;
    this.org = localStorage.getItem('orgDetails');
    await this.http.post(environment.api_host+ `/organization_member/${this.org}`,this.createMemberObj).subscribe(res=>{
      this.Member =JSON.stringify(res);
      localStorage.setItem('MemberDetails',this.Member);
      this.router.navigate(['/dashboard']);
      this.createMemberLoad=false; 
    },err=>{
      window.alert(err.error.message);
      this.createMemberLoad=false;
    })
  }

  async createBloodBank(){
    this.BloodBankLoad=true;
    this.org = localStorage.getItem('orgDetails');
    this.BloodBank.Org_id=this.org;
    await this.http.post(environment.api_host+"/bloodBank/",this.BloodBank).subscribe(res=>{
      this.BloodBankObj=JSON.parse(JSON.stringify(res));
      this.router.navigate(["/dashboard"]);
      this.BloodBankLoad=false;
    })
  }

  async sendBloodRequest(){
    this.bloodRequestLoad=true;
    this.org = localStorage.getItem('orgDetails');
    this.bloodRequestObj.RequestId = this.org;
    await this.http.post(environment.api_host+"/bloodRequest/",this.bloodRequestObj).subscribe(res=>{
      this.bloodRequest = JSON.parse(JSON.stringify(res));
      this.router.navigate(['/dashboard']);
      this.bloodRequestLoad=false;
    })
  }



  //getting Organization details
  async getorganizationDetails(){
    this.dashBoardLoad=true;
    this.org = localStorage.getItem('orgDetails');
    await this.http.get(environment.api_host+`/organization/${this.org}`).subscribe(res=>{
      this.organizationDetails=JSON.parse(JSON.stringify(res));
      this.Status=this.organizationDetails.status;
      console.log(this.Status);
      console.log(this.organizationDetails)
      this.dashBoardLoad=false;
    },err=>{
      window.alert(err.error.message);
      this.dashBoardLoad=false;
    })
  }

  //Getting Member details
  async getMemberDetails(){
    this.dashBoardLoad=true;
    this.mid = JSON.parse(localStorage.getItem('MemberDetails') || "{}");
    await this.http.get(environment.api_host+`/organization_member/${this.mid._id}`).subscribe(res=>{
      this.getMember=JSON.parse(JSON.stringify(res));
      this.dashBoardLoad=false;
    },err=>{
      window.alert(err.error.message);
      this.dashBoardLoad=false;
    })
  }

  async getOrganizationAppointment(){
    this.organizationAppointmentLoad=true;
    this.org = localStorage.getItem('orgDetails');
    await this.http.get(environment.api_host+`/appointments/Organization/${this.org}`).subscribe(res=>{
      this.organizationAppointment =JSON.parse(JSON.stringify(res));
      console.log(this.organizationAppointment);
      this.organizationAppointmentLoad=false;
    })
  }

  async getAllOrgMembers(){
    this.getOrgMemberLoad=true;
    this.mid = JSON.parse(localStorage.getItem('MemberDetails') || "{}");
    await this.http.get(environment.api_host+`/organization_member/getOrgMembers/${this.mid.organization_id}`).subscribe(res=>{
      this.getOrgMemberObj=JSON.parse(JSON.stringify(res));
      console.log(this.getOrgMemberObj)
      this.getOrgMemberLoad=false;
    })
  }



  async createOrganizationMember(){
    this.createOrgMemberLoad=true;
    console.log(this.OrgMemberObj);
    this.orgId = localStorage.getItem('orgDetails')
    await this.http.post(environment.api_host+`/organization_member/${this.orgId}`,this.OrgMemberObj).subscribe(res=>{
      this.createMemberObj=JSON.stringify(res);
      this.createMemberLoad=false;
    })
  }

  async getAllOrgDrives(){
    this.getOrgDriveLoad=true;
    this.mid = JSON.parse(localStorage.getItem('MemberDetails') || "{}");
    await this.http.get(environment.api_host+`/drives/organizationDrives/${this.mid.organization_id}`).subscribe(res=>{
      this.getOrgDriveObj=JSON.parse(JSON.stringify(res));
      console.log(this.getOrgDriveObj)
      this.getOrgDriveLoad=false;
    })
  }



  async getAllOrgnization() {
    this.getOrganizationLoad = true;
    await this.http.get(environment.api_host + "/organization").subscribe(res => {
      this.getOrganizationObj = JSON.parse(JSON.stringify(res));
      this.getOrganizationLoad = false;
    })
  }

  async getCampDetails(id:any){
    this.getDriveDetailsLoad=false;
    await this.http.get(environment.api_host+`/drives/${id}`).subscribe(res=>{
      this.getDriveDetailsObj=JSON.parse(JSON.stringify(res));
      console.log(this.getDriveDetailsObj);
    })
  }

  async createOrganizationDrives(){
    this.createOrgDriveLoad=true;
    console.log(this.createOrgDriveObj);
    this.orgId = localStorage.getItem('orgDetails')
    this.createOrgDriveObj.Organized_id=this.orgId;
    await this.http.post(environment.api_host+"/drives/",this.createOrgDriveObj).subscribe(res=>{
      this.createOrgDrive=JSON.stringify(res);
      this.createOrgDriveLoad=false;
    })
  }

  async getBloodbank(){
    this.getBloodbankLoad=true;
    this.mid = JSON.parse(localStorage.getItem('MemberDetails') || "{}");
    await this.http.get(environment.api_host+`/bloodBank/bloodBankDetails/${this.mid.organization_id}`).subscribe(res=>{
      this.getBloodBankObj=JSON.parse(JSON.stringify(res));
      this.getBloodbankLoad=false;
    })
  }


  async Login(){
    this.userLoginLoad=true;
    console.log(this.userLoginObj);
    await this.http.post(environment.api_host+'/organization_member/login/',this.userLoginObj).subscribe(res => {
      this.memberObj = JSON.stringify(res);
      localStorage.setItem('MemberDetails',this.memberObj);
      this.router.navigate(['/dashboard']);
      this.userLoginLoad=false; 
    }, err => {
      console.log(err.error.message);
      this.userLoginLoad = false;
    }); 
  }


  async OrganizationDetails(){
    this.dashBoardLoad=true;
    this.member = JSON.parse(localStorage.getItem('MemberDetails') || "{}");
    await this.http.get(environment.api_host+`/organization/${this.member.organization_id}`).subscribe(res=>{
      this.organizationDetails=JSON.parse(JSON.stringify(res));
      console.log(this.organizationDetails)
      localStorage.setItem('orgDetails',this.organizationDetails._id);
      this.Status=this.organizationDetails.status;
      this.dashBoardLoad=false;
    },err=>{
      window.alert(err.error.message);
      this.dashBoardLoad=false;
    })
  }

  async search(){
    this.searchAppointmentLoad=true;
    await this.http.get(environment.api_host+`/appointments/search/${this.searchAppointment}`).subscribe(res=>{
      this.searchAppointmentObj =JSON.parse(JSON.stringify(res));
      console.log(this.searchAppointmentObj);
      this.searchAppointmentLoad=false;
      this.searchElement=true;
    })
  }

  async userSearch(){
    this.userSearchLoad=true;
    await this.http.get(environment.api_host+`/user/userSearch/${this.userSearchText}`).subscribe(res=>{
      this.userSearchObj=JSON.parse(JSON.stringify(res));
      this.userSearchLoad=false;
      this.userSearchElement=true;
    })
  }


  async getAllUser(){
    this.userLoad=true;
    await this.http.get(environment.api_host+'/user').subscribe(res=>{
      this.userObj=JSON.parse(JSON.stringify(res));
      console.log(this.userObj);
      this.userLoad=false;
    })
  }

  async Userdetails(id:any){
    this.getUserDetailsLoad=false;
    this.uid=id
    await this.http.get(environment.api_host + `/user/${this.uid}`).subscribe(res => {
      this.getUserDetails = JSON.parse(JSON.stringify(res));
      console.log(this.getUserDetails);
      this.getUserDetailsLoad = false;
    });
  }

  async getDonationHistory(id:any) {
    this.getUserDonationDetailsLoad = true;
    this.uid = id;
    await this.http.get(environment.api_host + `/donation/${this.uid}`).subscribe(res => {
      this.getUserDonationDetails = JSON.parse(JSON.stringify(res));
      console.log(this.getUserDonationDetails);
      this.getUserDonationDetailsLoad = false;
    })
  }

  async deleteAppointment(){
    this.deleteAppointmentLoad=true;
    await this.http.delete(environment.api_host+`/appointments/${this.AppointmentId}`).subscribe(res=>{
      console.log(res);
      this.deleteAppointmentLoad=false;
    })
  }

  async updateAppointment(){
    this.updateAppointmentLoad=true;
    console.log(this.updateAppointmentValue)
    await this.http.put(environment.api_host+"/appointments/updateAppointment",this.updateAppointmentValue).subscribe(res=>{
      this.updateAppointmentObj=JSON.stringify(res);
      this.updateAppointmentLoad=false;
    })
  }

  async updateMemberAndAppointment(){
    this.updateMemberLoad=true;
    await this.http.put(environment.api_host+`/appointments/updateUser/${this.updateMemberRole}`,this.updateMemberValue).subscribe(res=>{
      this.updateMemberObj=JSON.stringify(res);
      this.updateMemberLoad=false;
    })
  }

  async updateDonorAppointment(){
    this.updateDonorload=true;
    await this.http.post(environment.api_host+"/appointments/updateDonor",this.updateDonorObj).subscribe(res=>{
      this.updateDonorload=false;
    })
  }

  async Logout() {
    this.isLoggedIn = false;
    localStorage.setItem('orgDetails', 'null');
    localStorage.setItem('MemberDetails', 'null');
    this.router.navigate(['/']);
  }


}
