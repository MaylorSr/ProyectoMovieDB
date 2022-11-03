import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ActorResponse } from "src/app/interfaces/actorDetails-interface";
import {
  Actor,
  ActorRespon,
  KnownFor,
} from "src/app/interfaces/actors-interface";
import { ActorsService } from "src/app/services/actors.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-profile-actor",
  templateUrl: "./card-profile-actor.component.html",
  styleUrls: ["./card-profile-actor.component.css"],
})
export class CardProfileActorComponent implements OnInit {
  id: number = 0;
  numPagesTotal = 0;
  pageActual = 1;
  listPeople: Actor[] = [];
  actor: ActorResponse = {} as ActorResponse;
  actorByFilms: Actor = {} as Actor;
  listFilms = this.actorByFilms.known_for;

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorsService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.pageActual = res["pageActual"];
      this.id = res["id"];
    });
    this.showActorInfo();
    this.showListFilms();
  }

  showActorInfo() {
    this.actorService.getActorInfo(this.id).subscribe((res) => {
      this.actor = res;
    });
  }

  showListFilms() {
    this.actorService.getListPeople(this.pageActual).subscribe((res) => {
      this.listPeople = res.results;
      for (let i of this.listPeople) {
        if (this.id == i.id) {
          this.actorByFilms = i;
          this.listFilms = this.actorByFilms.known_for;
        }
      }
    });
  }

  showImgPeople(actor: ActorResponse) {
    return `${environment.api_base_img}${actor.profile_path}`;
  }

  showFilmsImg(poserFilm: string) {
    return `${environment.api_base_img}${poserFilm}`;
  }
}
