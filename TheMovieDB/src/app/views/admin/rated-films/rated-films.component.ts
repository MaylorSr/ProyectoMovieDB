import { Component, OnInit } from '@angular/core';
import { FilmRated } from 'src/app/interfaces/rated-films-interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-rated-films',
  templateUrl: './rated-films.component.html',
  styleUrls: ['./rated-films.component.css']
})
export class RatedFilmsComponent implements OnInit {

  ratedFilms : FilmRated[] = []
  id = localStorage.getItem("id");
  session_id = localStorage.getItem("session_id");

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.getRatedMovies()
  }

  public getRatedMovies(){
    this.moviesService.getRatedMovies(parseInt(this.id),this.session_id).subscribe(resp => {
      this.ratedFilms = resp.results;
    })

  }

}
