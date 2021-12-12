import { Component } from '@angular/core';
import { ApisService } from './apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Organizations';


  constructor(public api:ApisService){}
}
