import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from '../apis.service';
@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.component.html',
  styleUrls: ['./camp-details.component.css']
})
export class CampDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute,public api:ApisService) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.api.getCampDetails(id);
  }

}
