import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ['Life.', 'Time.', ' Effort.'],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      loop: true
  };
    const typed = new Typed('.typed-element', options);

  }

}
