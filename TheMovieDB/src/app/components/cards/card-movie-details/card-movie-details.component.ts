import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailsResponse } from 'src/app/interfaces/movie-details-interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-card-movie-details',
  templateUrl: './card-movie-details.component.html',
  styleUrls: ['./card-movie-details.component.css']
})
export class CardMovieDetailsComponent implements OnInit {

  id : number = 0;
  movie: MovieDetailsResponse = {} as MovieDetailsResponse;

  constructor(private route: ActivatedRoute, private moviesService : MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(resp =>{
      this.id = resp["id"]
    })
  }

}
