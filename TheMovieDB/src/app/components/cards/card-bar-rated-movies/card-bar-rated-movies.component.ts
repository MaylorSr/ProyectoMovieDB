import { Component, Input, OnInit } from '@angular/core';
import { FilmRated } from 'src/app/interfaces/rated-films-interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-bar-rated-movies',
  templateUrl: './card-bar-rated-movies.component.html',
  styleUrls: ['./card-bar-rated-movies.component.css']
})
export class CardBarRatedMoviesComponent implements OnInit {

  @Input() filmRated : FilmRated = {} as FilmRated;

  constructor() { }

  ngOnInit(): void {
  }

  public showImgMovie(ratedFilm: FilmRated) {
    return `${environment.api_base_img}${ratedFilm.poster_path}`;
  }

}
