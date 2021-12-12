import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  loginLoad=false;
  loginObj:any;
  adminDetails:any;

  userLoadingState=false;
  users:any;

  organizationLoad=false;
  organizations:any;
  orgId:any;

  orgMemberLoad=false;
  orgMember:any;

  updateStatusObj:any;
  updateObj:any;

  driveLoad=false;
  driveObj:any;

  getMemberfamilyLoad=false;
  getMemberfamilyObj:any;
  memberId:any;

  pendingOrgLoad=false;
  pendingOrgObj:any;

  getDriveDetailsLoad=false;
  getDriveDetailsObj:any;

  constructor(public http:HttpClient,public router:Router) { }

  async Login(){
    this.loginLoad=true;
    console.log(this.loginObj);
    await this.http.post(environment.api_host+'/admin/login/',this.loginObj).subscribe(res=>{
      this.adminDetails=JSON.parse(JSON.stringify(res));
      localStorage.setItem("userId",this.adminDetails._id);
      this.router.navigate(['/members']);
      this.loginLoad=false;
    })
  }

  async getUsers(){
    this.userLoadingState = true;
    await this.http.get(environment.api_host+'/user/').subscribe(res=>{
      this.users = JSON.parse(JSON.stringify(res));
      console.log(this.users);
      this.userLoadingState=false;
    });
  }

  async getOrg(){
    this.organizationLoad=true;
    await this.http.get(environment.api_host+'/organization/').subscribe(res=>{
      this.organizations = JSON.parse(JSON.stringify(res));
      console.log(this.organizations);
      this.organizationLoad=false;
    })
  }

  async getPendingOrg(){
    this.pendingOrgLoad=true;
    await this.http.get(environment.api_host+'/organization/pending').subscribe(res=>{
      this.pendingOrgObj = JSON.parse(JSON.stringify(res));
      this.pendingOrgLoad=false;
    })
  }

  async update(){
    await this.http.post(environment.api_host+'/organization/status/',this.updateStatusObj).subscribe(res=>{
      this.updateObj=JSON.parse(JSON.stringify(res));
      console.log(this.updateObj);
    })
  }

  async getDrives(){
    this.driveLoad=true;
    await this.http.get(environment.api_host+'/drives/').subscribe(res=>{
      this.driveObj=JSON.parse(JSON.stringify(res));
      this.driveLoad=false;
    })
  }

  async getMemberFamily(){
    this.getMemberfamilyLoad=true;
    await this.http.get(environment.api_host+`/user/family_member/${this.memberId}`).subscribe(res=>{
      this.getMemberfamilyObj=JSON.parse(JSON.stringify(res));
      this.getMemberfamilyLoad=false;
    })
  }

  async getCampDetails(id:any){
    this.getDriveDetailsLoad=false;
    await this.http.get(environment.api_host+`/drives/${id}`).subscribe(res=>{
      this.getDriveDetailsObj=JSON.parse(JSON.stringify(res));
      console.log(this.getDriveDetailsObj);
    })
  }

}
