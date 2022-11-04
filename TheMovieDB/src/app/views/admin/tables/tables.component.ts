import { Component, OnInit } from "@angular/core";
import { FilmFav } from "src/app/interfaces/fav-films-interfaces";
import { FavFilmsService } from "src/app/services/fav-films.service";

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
})
export class TablesComponent implements OnInit {
  constructor(private favFilmsSerice: FavFilmsService) {}
  listFavFilms: FilmFav[] = [];
  session_id = localStorage.getItem("session_id");
  idAccount = localStorage.getItem("id");

  ngOnInit(): void {}

  showFavFilms() {
    this.favFilmsSerice
      .getFavFilms(15159087, this.session_id)
      .subscribe((res) => {
        this.listFavFilms = res.results;
      });
  }
}
