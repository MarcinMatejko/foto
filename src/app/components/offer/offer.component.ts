import { Component, OnInit } from '@angular/core';
import { fadeDown, fadeRight, fadeLeft } from 'src/app/animations';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  animations: [ fadeDown, fadeRight, fadeLeft ]
})
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
