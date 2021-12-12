import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})
export class DrivesComponent implements OnInit {

  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.api.getCampCity();
    this.api.getDrives();
    this.api.getCampState();
  }

  async Register(id:any){
   this.api.campId=id
    this.api.campRegister();
  }
}
