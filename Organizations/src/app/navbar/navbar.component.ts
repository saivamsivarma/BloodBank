import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public api:ApisService) { }
  public show = false;
  opennav() {
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.api.getMemberDetails();
  }

  async Logout(){
    this.api.Logout();
  }

}
