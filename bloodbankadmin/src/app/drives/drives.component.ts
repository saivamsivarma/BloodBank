import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})
export class DrivesComponent implements OnInit {


  constructor(public api:ApisService,public router:Router) { }

  ngOnInit(): void {
    this.api.getDrives();
  }

  async campDetails(id:any){
    this.router.navigate(['/campDeatils',id])
  }


}
