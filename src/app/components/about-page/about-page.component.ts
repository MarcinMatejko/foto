import { Component, OnInit } from '@angular/core';
import { fadeDown, fadeRight, fadeLeft } from 'src/app/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
  animations: [ fadeDown, fadeRight, fadeLeft ]
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
