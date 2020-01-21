import { Component, OnInit } from "@angular/core";
import { fadeUp, fadeUp1, fadeUp2 } from "src/app/animations";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  animations: [fadeUp, fadeUp1, fadeUp2]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
