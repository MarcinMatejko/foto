import { Component, OnInit } from '@angular/core';
import { fadeDown, fadeRight, fadeLeft, fadeDown2 } from 'src/app/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ fadeDown, fadeDown2, fadeRight, fadeLeft ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
