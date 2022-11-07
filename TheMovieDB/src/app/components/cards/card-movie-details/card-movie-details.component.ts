import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/interfaces/movie-cast-interface';
import { MovieDetailsResponse } from 'src/app/interfaces/movie-details-interface';
import { Video } from 'src/app/interfaces/movie-videos';
import { MoviesService } from 'src/app/services/movies.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-movie-details',
  templateUrl: './card-movie-details.component.html',
  styleUrls: ['./card-movie-details.component.css']
})
export class CardMovieDetailsComponent implements OnInit {

  id : number = 0;
  movie: MovieDetailsResponse = {} as MovieDetailsResponse;
  cast : Cast[] = []
  videos : Video[] = []

  constructor(private route: ActivatedRoute, private moviesService : MoviesService, private sanitizer : DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(resp =>{
      this.id = resp["id"]
      this.getMovieDetails(this.id);
      this.getCasting(this.id);
      this.getTrailers(this.id);
    })
  } 

  public getMovieDetails(id : number){
    this.moviesService.getMovieDetails(id).subscribe(resp =>{
      this.movie = resp;
    })
  }

  public getCasting(id : number){
    this.moviesService.getCredits(id).subscribe(resp => {
      this.cast = resp.cast;
    })
  }

  public getTrailers(id : number){
    this.moviesService.getVideosMovie(id).subscribe(resp =>{
      this.videos = resp.results
    })
  }

  public getMovieImg () : String {
    return `${environment.api_base_img}${this.movie.poster_path}`
  }

  public getActorImg (actor : Cast): String {
    return  `${environment.api_base_img}${actor.profile_path}`
  }
  
  getVideoUrl(video : Video){
    let url;
    url = `http://www.youtube.com/embed/${video.key}`
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
  
}

