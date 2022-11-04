import { Component, OnInit } from "@angular/core";
import { FavFilmResponse } from "src/app/interfaces/fav-films-interfaces";
import { FavFilmsService } from "src/app/services/fav-films.service";

@Component({
  selector: "app-card-bar-fav-films",
  templateUrl: "./card-bar-fav-films.component.html",
  styleUrls: ["./card-bar-fav-films.component.css"],
})
export class CardBarFavFilmsComponent implements OnInit {
  constructor(private favFilmsSerice: FavFilmsService) {}
  listFavFilms: FavFilmResponse[] = [];

  ngOnInit(): void {}

  showFavFilms() {
    this.favFilmsSerice.getFavFilms().subscribe((res) => {});
  }
}
