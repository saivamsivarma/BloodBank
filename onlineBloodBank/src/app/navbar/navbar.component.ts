import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public api:ApiService) { }
  public show = false;
  opennav() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }

  async logout(){
    this.api.Logout();
  }

}
