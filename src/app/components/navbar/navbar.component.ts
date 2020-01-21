import { Component, OnInit } from "@angular/core";
import { fadeRight } from "src/app/animations";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  animations: [fadeRight]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
