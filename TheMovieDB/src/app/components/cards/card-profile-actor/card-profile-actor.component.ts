import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ActorResponse } from "src/app/interfaces/actorDetails-interface";
import { FilmByActor } from "src/app/interfaces/actorFilms-interface";
import { ActorsService } from "src/app/services/actors.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-profile-actor",
  templateUrl: "./card-profile-actor.component.html",
  styleUrls: ["./card-profile-actor.component.css"],
})
export class CardProfileActorComponent implements OnInit {
  id: number = 0;
  actor: ActorResponse = {} as ActorResponse;
  listFilms: FilmByActor[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private actorService: ActorsService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((res) => {
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
    this.actorService.getFilmsByActor(this.id).subscribe((res) => {
      this.listFilms = res.cast;
    });
  }

  showImgPeople(actor: ActorResponse) {
    return `${environment.api_base_img}${actor.profile_path}`;
  }

  showFilmsImg(poserFilm: string) {
    return `${environment.api_base_img}${poserFilm}`;
  }
}
