import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-org-members',
  templateUrl: './org-members.component.html',
  styleUrls: ['./org-members.component.css']
})
export class OrgMembersComponent implements OnInit {

  constructor(public api:ApisService) { }

  Member_Name:any;
  Contact:any;
  Role:any;
  Member_email:any;
  
  ngOnInit(): void {
    this.api.getAllOrgMembers();
  }

  async createMember(){
    this.api.OrgMemberObj={};
    this.api.OrgMemberObj.Member_Name =this.Member_Name;
    this.api.OrgMemberObj.Contact = this.Contact;
    this.api.OrgMemberObj.Role = this.Role;
    this.api.OrgMemberObj.Email = this.Member_email;
    this.api.OrgMemberObj.Password="Password"
    this.api.createOrganizationMember();
    this.ngOnInit();
  }

}
