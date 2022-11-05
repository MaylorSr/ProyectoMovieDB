import { Component, Input, OnInit } from "@angular/core";
import { DetailResponse } from "src/app/interfaces/details-user.interface";
import { FilmFav } from "src/app/interfaces/fav-films-interfaces";
import { FavFilmsService } from "src/app/services/fav-films.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
})
export class TablesComponent implements OnInit {
  constructor(private favFilmsSerice: FavFilmsService) {}
  listFavFilms: FilmFav[] = [];
  id = localStorage.getItem("id");
  session_id = localStorage.getItem("session_id");
  ngOnInit() {
    this.showFavFilms();
  }

  showFavFilms() {
    this.favFilmsSerice
      .getFavFilms(parseInt(this.id), this.session_id)
      .subscribe((res) => {
        this.listFavFilms = res.results;
      });
  }
}
