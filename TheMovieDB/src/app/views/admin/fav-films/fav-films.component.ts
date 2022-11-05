import { Component, OnInit } from "@angular/core";
import { FilmFav } from "src/app/interfaces/fav-films-interfaces";
import { FavFilmsService } from "src/app/services/fav-films.service";

@Component({
  selector: "app-fav-films",
  templateUrl: "./fav-films.component.html",
})
export class FavFilmsComponent implements OnInit {
  constructor(private favFilmsSerice: FavFilmsService) {}
  shearchText : any;
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
