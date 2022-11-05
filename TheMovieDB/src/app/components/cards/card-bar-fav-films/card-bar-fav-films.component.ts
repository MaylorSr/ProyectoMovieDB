import { Component, OnInit } from "@angular/core";
import { FilmFav } from "src/app/interfaces/fav-films-interfaces";
import { Input } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-card-bar-fav-films",
  templateUrl: "./card-bar-fav-films.component.html",
  styleUrls: ["./card-bar-fav-films.component.css"],
})
export class CardBarFavFilmsComponent implements OnInit {
  constructor() {}
  @Input() film: FilmFav = {} as FilmFav;

  ngOnInit(): void {}

  public showImgMovie(movie: FilmFav) {
    return `${environment.api_base_img}${movie.poster_path}`;
  }
}
