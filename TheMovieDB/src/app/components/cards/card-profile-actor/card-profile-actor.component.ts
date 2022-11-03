import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ActorResponse } from "src/app/interfaces/actorDetails-interface";
import { PeopleRespon, Result } from "src/app/interfaces/actors-interface";
import { ActorsService } from "src/app/services/actors.service";

@Component({
  selector: "app-card-profile-actor",
  templateUrl: "./card-profile-actor.component.html",
  styleUrls: ["./card-profile-actor.component.css"],
})
export class CardProfileActorComponent implements OnInit {
  id: number = 0;
  numPagesTotal = 0;
  pageActual = 1;
  listPeople: Result[] = [];

  actor: Result = {} as Result;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorsService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.id = res["id"];
      this.saveActor(2);
    });
  }

  saveActor(page: number) {
    this.actorService.getListPeople(page).subscribe((res) => {
      this.listPeople = res.results;
      for (let i of this.listPeople) {
        if (this.id == i.id) {
          this.actor = i;
        }
      }
    });
  }
}
