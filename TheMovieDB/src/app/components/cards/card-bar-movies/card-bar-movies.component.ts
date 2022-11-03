import { Component, Input, OnInit } from '@angular/core';
import { PopularMovie } from 'src/app/interfaces/movies-interface';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-bar-movies',
  templateUrl: './card-bar-movies.component.html',
  styleUrls: ['./card-bar-movies.component.css']
})
export class CardBarMoviesComponent implements OnInit {

  numPagesTotal = 0;
  page = 1;
  pageActual : number =this.page;
  listMovies : PopularMovie[] = [];
  @Input() movie : PopularMovie = {} as PopularMovie;

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
  }

  public showImgMovie (movie : PopularMovie){
    return `${environment.api_base_img}${movie.poster_path}`;
  }


}
