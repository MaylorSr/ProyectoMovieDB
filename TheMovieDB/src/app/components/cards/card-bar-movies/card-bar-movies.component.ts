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

  voteAvg : number = 0;
  voteAvgStr : String = "";
  votesColor: String = "";
  votesBgColor: String = "";

  listMovies : PopularMovie []= []
  @Input() movie : PopularMovie = {} as PopularMovie;

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
  }

  public showImgMovie (movie : PopularMovie){
    return `${environment.api_base_img}${movie.poster_path}`;
  }

  public getVoteAvg(movie : PopularMovie){
   this.voteAvg = movie.vote_average*10;
   this.voteAvgStr = "width: "+this.voteAvg + "%"
  }

  public setVotesColor(movie: PopularMovie){
    this.getVoteAvg(movie)
    if(this.voteAvg >=75){
      this.votesBgColor = "overflow-hidden h-2 text-xs flex rounded bg-emerald-200"
      this.votesColor = "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
    }
    else if(this.voteAvg>=60){
      this.votesBgColor = "overflow-hidden h-2 text-xs flex rounded bg-blueGray-200"
      this.votesColor = "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
    }
    else if(this.voteAvg>=50){
      this.votesBgColor = "overflow-hidden h-2 text-xs flex rounded bg-orange-200"
      this.votesColor = "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
    }
    else{
      this.votesBgColor = "overflow-hidden h-2 text-xs flex rounded bg-red-200"
      this.votesColor = "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
    }
    return this.votesBgColor;
  }
}
