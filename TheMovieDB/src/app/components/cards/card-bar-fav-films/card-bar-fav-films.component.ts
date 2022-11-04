import { Component, OnInit } from "@angular/core";
import { FavFilmsService } from "src/app/services/fav-films.service";
import { FilmFav } from "src/app/interfaces/fav-films-interfaces";
import { Input } from "@angular/core";

@Component({
  selector: "app-card-bar-fav-films",
  templateUrl: "./card-bar-fav-films.component.html",
  styleUrls: ["./card-bar-fav-films.component.css"],
})
export class CardBarFavFilmsComponent implements OnInit {
  constructor(private favFilmsSerice: FavFilmsService) {}
  @Input() film: FilmFav = {} as FilmFav;

  ngOnInit(): void {}
}
