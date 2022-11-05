import { Component, Input, OnInit } from "@angular/core";
import { Actor } from "src/app/interfaces/actors-interface";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-bar-actor",
  templateUrl: "./card-bar-actor.component.html",
  styleUrls: ["./card-bar-actor.component.css"],
})
export class CardBarActorComponent implements OnInit {
  constructor() {}

  @Input() actor: Actor = {} as Actor;

  ngOnInit() {}
  ngAfterViewInit() {}

  showImgPeople(actor: Actor) {
    return `${environment.api_base_img}${actor.profile_path}`;
  }
}
