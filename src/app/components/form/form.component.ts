import { Component, OnInit } from '@angular/core';
import { fadeDown, fadeRight, fadeLeft, fadeDown2 } from 'src/app/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [ fadeDown, fadeDown2, fadeRight, fadeLeft ]
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
