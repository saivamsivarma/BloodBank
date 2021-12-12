import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  textSearch:any
  interval:any;

  constructor(public api:ApiService,/*public alanApi:AlanService*/) { }

  ngOnInit(): void {
    this.api.getUserDetails();
    this.api.getAppointments();
    this.api.getRequest();
    this.api.getAllOrgnization();
    this.api.getAllUser();
     this.api.getPendingMember();
     this.api.getOrgnizationCity();
  }

  async userSearch(){
    if(this.textSearch==""){
      this.api.getAllUser();
      this.api.userSearchElement=false;
    }else{
      this.api.userSearchText=this.textSearch;
      this.api.userSearch();
    }
  }

  async locationToggle(){
    this.api.updateLocation();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 500);
  }
  
  
  async familyShareToggle(){
    this.api.updatefamilyShare();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 500);
  }



  async add(i:any){
    this.api.addMemberId=i;
    this.api.addMember();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 1000);
  }


  async AcceptMember(i:any){
    this.api.acceptMemberId=i;
    this.api.acceptMember();
    this.interval=setInterval(() => {
      this.ngOnInit();
      this.ngOnDestroy(); 
      }, 1000);
  }

  

  Logout(){
    this.api.Logout();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  
}
